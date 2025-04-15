import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "../css/StyledSignup";
import axios from "axios";
import CompleteSignup from "./CompleteSignup";
import styles from "../css/StyledDeliveryInfo.module.css";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";

const BACKEND_URL = "http://127.0.0.1:8000";

const Signup2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState(""); // State for the selected file name

  const openPostCode = () => setIsPopupOpen(true);
  const closePostCode = () => setIsPopupOpen(false);

  const handlePostCodeSelection = (data) => {
    setFormData((prevState) => ({
      ...prevState,
      zoneCode: data.zonecode,
      postalAddress: data.address,
    }));
    closePostCode();
  };

  const [formData, setFormData] = useState({
    userId: "",
    nickname: "",
    profile: "",
    phone: "",
    zoneCode: "",
    postalAddress: "",
    address: "",
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nickname: "",
    profile: "",
    phone: "",
    address: "",
  });

  const [successMessages, setSuccessMessages] = useState({
    nickname: "",
    profile: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prevState) => ({
        ...prevState,
        [name]: formattedPhone,
      }));
      validateField(name, formattedPhone);
    } else {
      if (name === "profile" && files && files.length > 0) {
        setSelectedFileName(files[0].name); // Update the selected file name
      }
      setFormData((prevState) => ({
        ...prevState,
        [name]: type === "file" ? files[0] : value,
      }));
      validateField(name, type === "file" ? files[0] : value);
    }
  };

  const formatPhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, "");
    let formatted = cleaned;

    if (cleaned.length > 3 && cleaned.length <= 7) {
      formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else if (cleaned.length > 7) {
      formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(
        3,
        7
      )}-${cleaned.slice(7, 11)}`;
    }

    return formatted;
  };

  const validateField = (fieldName, value) => {
    let error = "";
    let successMessage = "";

    switch (fieldName) {
      case "nickname":
        if (!value) {
          error = "닉네임을 입력해주세요.";
        }
        break;
    }

    setErrors((prevState) => ({
      ...prevState,
      [fieldName]: error,
    }));

    setSuccessMessages((prevState) => ({
      ...prevState,
      [fieldName]: successMessage,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nickname) {
      alert("닉네임은 필수 입력 항목입니다.");
      return;
    }

    const dataToSend = new FormData();
    dataToSend.append("user_id", userId);
    dataToSend.append("nickname", formData.nickname);
    dataToSend.append("phone", formData.phone);
    dataToSend.append("zoneCode", formData.zoneCode);
    dataToSend.append("postalAddress", formData.postalAddress);
    dataToSend.append("address", formData.address);

    if (formData.profile instanceof File) {
      dataToSend.append("profile", formData.profile);
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}/accounts/register/step2/`,
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setShowCompleteModal(true);
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("정보 전송에 실패했습니다.", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  const goBack = () => {
    navigate("/Signup1");
  };

  return (
    <S.Body>
      <S.Contaianer>
        <S.Title>회원가입</S.Title>
        {showCompleteModal && <CompleteSignup />}
        <S.Step1>
          <p>STEP 2</p>
        </S.Step1>

        <S.Step1Items>
          <S.Line>
            <img
              id="Logo"
              src={`${process.env.PUBLIC_URL}/img/Line.png`}
              alt="Logo"
            />
          </S.Line>
          <S.Step1Item>
            <S.Number>
              <p>5</p>
            </S.Number>
            <S.NavName>
              <p>닉네임</p>
            </S.NavName>
            <div>
              <input
                name="nickname"
                id="nickname"
                type="text"
                placeholder="닉네임 (익명 보장)"
                value={formData.nickname}
                onChange={handleInputChange}
              />
              {errors.nickname && (
                <S.ErrorMessage>{errors.nickname}</S.ErrorMessage>
              )}
              {successMessages.nickname && (
                <S.SuccessMessage>{successMessages.nickname}</S.SuccessMessage>
              )}
            </div>
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>6</p>
            </S.Number>
            <S.NavName>
              <p>
                프로필 사진
                <br />
                <span>*선택사항</span>
              </p>
            </S.NavName>
            <S.SelectBtn>
              <input
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                name="profile"
                id="profile"
              />
              <p
                style={{
                  color: "#3D4C00",
                  fontFamily: "Pretendard Variable",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                사진 선택하기
              </p>
            </S.SelectBtn>
            {selectedFileName && (
              <p
                style={{
                  color: "#3D4C00",
                  marginLeft: "220px",
                  fontSize: "20px",
                  position: "absolute",
                  bottom: "2px",
                }}
              >
                {selectedFileName}
              </p>
            )}
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>7</p>
            </S.Number>
            <S.NavName>
              <p>
                전화번호
                <br />
                <span>*선택사항</span>
              </p>
            </S.NavName>
            <div>
              <input
                name="phone"
                id="phone"
                type="text"
                placeholder="010-0000-0000"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <S.ErrorMessage>{errors.phone}</S.ErrorMessage>}
              {successMessages.phone && (
                <S.SuccessMessage>{successMessages.phone}</S.SuccessMessage>
              )}
            </div>
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>8</p>
            </S.Number>
            <S.NavName>
              <p>
                배송주소
                <br />
                <span>*선택사항</span>
              </p>
            </S.NavName>
            <S.SelectBtn>
              <div
                onClick={openPostCode}
                style={{
                  color: "#3D4C00",
                  fontFamily: "Pretendard Variable",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                우편번호 찾기
              </div>
            </S.SelectBtn>
            <div>
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
              <input
                type="text"
                className={`${styles.inputBox} ${styles.zonecode}`}
                style={{ width: "200px", marginLeft: "50px" }}
                placeholder="우편번호"
                value={formData.zoneCode}
                onChange={handleInputChange}
                readOnly
              />
              <div className={styles.row}>
                <input
                  type="text"
                  className={`${styles.inputBox} ${styles.postalAddress}`}
                  placeholder="주소"
                  style={{ width: "300px", marginLeft: "50px" }}
                  value={formData.postalAddress}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
              <input
                name="address"
                id="address"
                type="text"
                style={{ width: "300px", marginLeft: "50px" }}
                placeholder="상세 주소 입력"
                value={formData.address}
                onChange={handleInputChange}
              />
              {errors.address && (
                <S.ErrorMessage>{errors.address}</S.ErrorMessage>
              )}
              {successMessages.address && (
                <S.SuccessMessage>{successMessages.address}</S.SuccessMessage>
              )}
            </div>
          </S.Step1Item>
        </S.Step1Items>
        <S.BackBtn onClick={goBack}>
          <p>이전</p>
        </S.BackBtn>
        <S.FinishBtn onClick={handleSubmit}>
          <p>가입하기</p>
        </S.FinishBtn>
      </S.Contaianer>
    </S.Body>
  );
};

export default Signup2;
