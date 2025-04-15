import React, { useEffect, useState } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import styles from "../css/StyledCheckoutPage.module.css";
import SuccessModal from "./SuccessModal";

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "VQMfaA0KTAWJ8hFAOE9PL";

const CheckoutPage = ({
  totalAmount,
  selectedItems,
  ordererName,
  recipientName,
  phoneNumber,
  postalAddress,
  detailAddress,
  onClose,
}) => {
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    async function fetchPaymentWidgets() {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        const widgets = tossPayments.widgets({ customerKey });
        setWidgets(widgets);
      } catch (error) {
        console.error("Failed to initialize Toss Payments:", error);
      }
    }

    fetchPaymentWidgets();
  }, []);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (!widgets) return;

      try {
        const validAmount = {
          currency: "KRW",
          value: Math.max(Number(totalAmount), 1),
        };

        await widgets.setAmount(validAmount);

        await Promise.all([
          widgets.renderPaymentMethods({
            selector: "#payment-method",
            variantKey: "DEFAULT",
          }),
          widgets.renderAgreement({
            selector: "#agreement",
            variantKey: "AGREEMENT",
          }),
        ]);

        setReady(true);
      } catch (error) {
        console.error("Failed to render payment widgets:", error);
      }
    }

    renderPaymentWidgets();
  }, [widgets, totalAmount]);

  const handlePayment = async () => {
    if (!widgets) return;
    try {
      await widgets.requestPayment({
        orderId: `order_${Date.now()}`,
        orderName: selectedItems,
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    onClose();
  };

  return (
    <div className={styles.checkoutModal}>
      <div className={styles.checkoutModalContent}>
        <span className={styles.closeBtn} onClick={onClose}>
          <img src="/img/union.png" alt="Close" />
        </span>
        <h2 className={styles.title}>결제 정보</h2>
        <div className={styles.infoSection}>
          <h3>주문 정보</h3>
          <p className={styles.info} style={{ whiteSpace: "pre-line" }}>
            <strong className={styles.t}>상품명:</strong> {selectedItems}
          </p>
        </div>
        <div className={styles.infoSection}>
          <h3>주문자 정보</h3>
          <p className={styles.info}>
            <strong className={styles.t}>주문자:</strong> {ordererName}
          </p>
          <p className={styles.info}>
            <strong className={styles.t}>수령인:</strong> {recipientName}
          </p>
          <p className={styles.info}>
            <strong className={styles.t}>전화번호:</strong> {phoneNumber}
          </p>
        </div>
        <div className={styles.infoSection}>
          <h3>배송지</h3>
          <p className={styles.ad}>
            {postalAddress} <br />
            {detailAddress}
          </p>
        </div>
        <div className={styles.price} style={{ zIndex: "0" }}>
          <p className={styles.pTitle}>총 결제 금액</p>
          <span style={{ fontSize: "20px" }} className={styles.totalPrice}>
            {totalAmount}원
          </span>
        </div>
        <div className={styles.payment}>
          <div id="payment-method" className={styles.paymentMethod}></div>
          <div id="agreement" className={styles.agreement}></div>
          <button
            className={`${styles.payBtn} ${styles.button}`}
            disabled={!ready}
            onClick={handlePayment}
          >
            결제하기
          </button>
        </div>
      </div>
      {showSuccessModal && <SuccessModal onClose={handleCloseSuccessModal} />}
    </div>
  );
};

export default CheckoutPage;
