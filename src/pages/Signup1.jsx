import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../css/StyledSignup";
import axios from "axios";

const BACKEND_URL = "http://127.0.0.1:8000";

const Signup1 = () => {
  const navigate = useNavigate();

  // 입력 상태 관리
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  // 유효성 검사 에러 메시지 상태 관리
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  // 유효성 검사 성공 메시지 상태 관리
  const [successMessages, setSuccessMessages] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  // 사용자 ID 상태 관리
  const [userId, setUserId] = useState(null);

  // 입력 값 변경 처리 및 유효성 검사
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // 각 필드에 대한 유효성 검사 실행
    validateField(name, value);
  };

  // 특정 필드에 대한 유효성 검사
  const validateField = (fieldName, value) => {
    let error = "";
    let success = "";

    switch (fieldName) {
      case "username":
        const usernameRegex = /^[a-zA-Z0-9@./+/-/_]+$/;
        if (!value) {
          error = "아이디를 입력해주세요.";
        } else if (!usernameRegex.test(value)) {
          error = "아이디는 영문자, 숫자로만 구성할 수 있습니다.";
        } else {
          success = "사용 가능한 아이디입니다.";
        }
        break;
      case "password":
        const passwordRegex =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
        if (!value) {
          error = "비밀번호를 입력해주세요.";
        } else if (!passwordRegex.test(value)) {
          error = "유효하지 않은 비밀번호입니다.";
        } else {
          success = "사용 가능한 비밀번호입니다.";
        }
        break;
      case "passwordConfirm":
        if (!value) {
          error = "비밀번호 확인을 입력해주세요.";
        } else if (value !== formData.password) {
          error = "비밀번호가 일치하지 않습니다.";
        } else {
          success = "비밀번호가 일치합니다.";
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          error = "이메일을 입력해주세요.";
        } else if (!emailRegex.test(value)) {
          error = "유효한 이메일 주소를 입력해주세요.";
        } else {
          success = "사용 가능한 이메일입니다.";
        }
        break;
      default:
        break;
    }

    setErrors((prevState) => ({
      ...prevState,
      [fieldName]: error,
    }));

    setSuccessMessages((prevState) => ({
      ...prevState,
      [fieldName]: success,
    }));
  };

  // 회원가입 완료 처리
  const handleComplete = () => {
    if (
      !formData.username ||
      !formData.password ||
      !formData.passwordConfirm ||
      !formData.email
    ) {
      alert("필수 입력 항목입니다.");
      return;
    }

    // API 요청 데이터
    const requestData = {
      username: formData.username,
      password: formData.password,
      password_confirm: formData.passwordConfirm,
      email: formData.email,
    };

    // 사용자 등록 API 호출
    axios
      .post(`${BACKEND_URL}/accounts/register/step1/`, requestData)
      .then((response) => {
        console.log("Step 1 completed. Proceed to step 2.", response.data);
        const receivedUserId = response.data.userId;

        // 서버에서 부여해준 사용자 아이디 저장
        console.log("Received userId:", receivedUserId);
        setUserId(receivedUserId);

        // signup2로 이동시 사용자 아이디 값 함께 전달
        navigate("/signup2", { state: { userId: receivedUserId } });
      })
      .catch((error) => {
        console.error("Error while registering:", error);
        alert("회원가입 중 오류가 발생했습니다.");
      });
  };

  return (
    <S.Body>
      <S.Contaianer>
        <S.Title>회원가입</S.Title>
        <S.Step1>
          <p>STEP 1</p>
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
              <p>1</p>
            </S.Number>
            <S.NavName>
              <p>아이디</p>
            </S.NavName>
            <div>
              <input
                name="username"
                id="username"
                type="text"
                placeholder="문자, 숫자, @/./+/-/_ 문자로만 구성"
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && (
                <S.ErrorMessage>{errors.username}</S.ErrorMessage>
              )}
              {!errors.username && successMessages.username && (
                <S.SuccessMessage>{successMessages.username}</S.SuccessMessage>
              )}
            </div>
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>2</p>
            </S.Number>
            <S.NavName>
              <p>비밀번호</p>
            </S.NavName>
            <div>
              <input
                name="password"
                id="password"
                type="password"
                placeholder="비밀번호(영어, 숫자, 특수문자 조합 8자 이상)"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <S.ErrorMessage>{errors.password}</S.ErrorMessage>
              )}
              {!errors.password && successMessages.password && (
                <S.SuccessMessage>{successMessages.password}</S.SuccessMessage>
              )}
            </div>
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>3</p>
            </S.Number>
            <S.NavName>
              <p>비밀번호 확인</p>
            </S.NavName>
            <div>
              <input
                name="passwordConfirm"
                id="passwordConfirm"
                type="password"
                placeholder="비밀번호 재입력"
                value={formData.passwordConfirm}
                onChange={handleInputChange}
              />
              {errors.passwordConfirm && (
                <S.ErrorMessage>{errors.passwordConfirm}</S.ErrorMessage>
              )}
              {!errors.passwordConfirm && successMessages.passwordConfirm && (
                <S.SuccessMessage>
                  {successMessages.passwordConfirm}
                </S.SuccessMessage>
              )}
            </div>
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>4</p>
            </S.Number>
            <S.NavName>
              <p>이메일</p>
            </S.NavName>
            <div>
              <input
                name="email"
                id="email"
                type="text"
                placeholder="이메일"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}
              {!errors.email && successMessages.email && (
                <S.SuccessMessage>{successMessages.email}</S.SuccessMessage>
              )}
            </div>
          </S.Step1Item>
        </S.Step1Items>
        <S.NextBtn onClick={handleComplete}>
          <p>다음</p>
        </S.NextBtn>
      </S.Contaianer>
    </S.Body>
  );
};

export default Signup1;
