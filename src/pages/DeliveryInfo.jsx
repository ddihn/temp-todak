import React, { useState } from "react";
import styles from "../css/StyledDeliveryInfo.module.css";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import { useNavigate, useLocation } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";

function DeliveryInfo() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [postalAddress, setPostalAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ordererName, setOrdererName] = useState("");
  const [recipientName, setRecipientName] = useState("");

  const openPostCode = () => setIsPopupOpen(true);
  const closePostCode = () => setIsPopupOpen(false);

  const handlePostCodeSelection = (data) => {
    setPostalAddress(data.address);
    setZoneCode(data.zonecode);
    closePostCode();
  };

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2,3})(\d{3,4})(\d{4})$/);
    return match ? `${match[1]}-${match[2]}-${match[3]}` : cleaned;
  };

  const handlePhoneNumberChange = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  const openPaymentModal = () => setIsPaymentModalOpen(true);
  const closePaymentModal = () => setIsPaymentModalOpen(false);

  // Extract data from the location state
  const { totalAmount, selectedItems } = location.state || {};

  return (
    <>
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <img
          className={styles.conImg}
          src="/img/plantTree-bg.png"
          alt="plant tree background img"
          style={{ position: "absolute", zIndex: " -1" }}
        />
        <div className={styles.innerContainer}>
          <div
            className={styles.deliWp}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.top}>
              <div className={styles.boxImg}>
                <img src="/img/deliBox.png" alt="tree icon" />
              </div>
              <div className={styles.deliTitle}>기억 나무 배송</div>
            </div>

            <div
              className={styles.botWp}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <img src="/img/line.png" alt="line" className={styles.line} />
              <div className={styles.orderWp}>
                <img src="/img/d_1.png" alt="1" />
                <div className={`${styles.orderer} ${styles.title}`}>
                  주문자
                </div>
                <input
                  type="text"
                  className={styles.inputBox}
                  placeholder="주문자 성함"
                  value={ordererName}
                  onChange={(e) => setOrdererName(e.target.value)}
                />
              </div>
              <div className={styles.recipientWp}>
                <img src="/img/d_2.png" alt="2" />
                <div className={`${styles.recipient} ${styles.title}`}>
                  수령인
                </div>
                <input
                  type="text"
                  className={styles.inputBox}
                  placeholder="수령인 성함"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                />
              </div>
              <div className={styles.telWp}>
                <img src="/img/d_3.png" alt="3" />
                <div className={`${styles.tel} ${styles.title}`}>전화번호</div>
                <input
                  type="text"
                  className={styles.inputBox}
                  placeholder="010-0000-0000"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  maxLength="13"
                />
              </div>
              <div className={styles.addressWp}>
                <img src="/img/d_4.png" alt="4" />
                <div className={`${styles.address} ${styles.title}`}>
                  <span className={styles.adt}>배송 주소</span>
                </div>
                <div className={styles.addressInputWp}>
                  <div className={styles.row}>
                    <input
                      type="text"
                      className={`${styles.inputBox} ${styles.zonecode}`}
                      placeholder="우편번호"
                      value={zoneCode}
                      readOnly
                    />
                    <div
                      className={styles.postalCodeBtn}
                      onClick={openPostCode}
                    >
                      우편번호 찾기
                    </div>
                    <div id="popupDom">
                      {isPopupOpen && (
                        <PopupDom>
                          <PopupPostCode
                            onClose={closePostCode}
                            onSelect={handlePostCodeSelection}
                          />
                        </PopupDom>
                      )}
                    </div>
                  </div>
                  <div className={styles.row}>
                    <input
                      type="text"
                      className={`${styles.inputBox} ${styles.postalAddress}`}
                      placeholder="주소"
                      value={postalAddress}
                      readOnly
                    />
                  </div>
                  <div className={styles.row}>
                    <input
                      type="text"
                      className={styles.inputBox}
                      placeholder="상세 주소 입력"
                      value={detailAddress}
                      onChange={(e) => setDetailAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "",
                height: "100%",
              }}
            >
              <div
                className={styles.backBtn}
                onClick={() => navigate("/deliveryProduct")}
                style={{ marginLeft: "10%" }}
              >
                이전
              </div>
              <div style={{ flex: 3 }}></div>
              <div
                className={styles.deliBtn}
                onClick={openPaymentModal}
                style={{ marginRight: "5%" }}
              >
                결제 및 배송 신청
              </div>
            </div>
            {isPaymentModalOpen && (
              <CheckoutPage
                totalAmount={totalAmount}
                selectedItems={selectedItems}
                ordererName={ordererName}
                recipientName={recipientName}
                phoneNumber={phoneNumber}
                postalAddress={postalAddress}
                detailAddress={detailAddress}
                onClose={closePaymentModal} // Pass the close function
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryInfo;
