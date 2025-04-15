import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
//로그인, 회원가입 후 이용하세요 모달

export const Contaianer = styled.div`
  position: fixed;
  z-index: 10000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70vw;
  height: 55vh;
  flex-shrink: 0;
  border-radius: 50px;
  background: linear-gradient(0deg, #f9f9c8 0%, #ffffeb 48%);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);
  gap: 10px;
  img {
    width: 88.229px;
    height: 83.052px;
    flex-shrink: 0;
  }
  #message {
    height: 32px;
    flex-shrink: 0;
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #goSignupBtn {
    width: 260px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 40px;
    background: var(--y, linear-gradient(180deg, #fff9e4 0%, #ffda57 100%));
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    margin-top: 10px;
  }
  #goLoginBtn {
    width: 260px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 40px;
    background: var(--y, linear-gradient(180deg, #fff9e4 0%, #ffda57 100%));
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    margin-top: 10px;
  }
  #btnp {
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }
`;
export const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 3vw;
`;
const NeedLogin = () => {
  const navigate = useNavigate();

  const handleNavLogin = () => {
    navigate("/login");
  };
  const handleNavSignup = () => {
    navigate("/signup1");
  };

  return (
    <Contaianer>
      <img
        id="logo"
        src={`${process.env.PUBLIC_URL}/img/TodakLogo4.svg`}
        alt="logo"
      />
      <p id="message">로그인 이후 이용이 가능합니다.</p>
      <Btns>
        <button id="goSignupBtn" onClick={handleNavSignup}>
          <p id="btnp">회원가입하기</p>
        </button>

        <button id="goLoginBtn" onClick={handleNavLogin}>
          <p id="btnp">로그인하기</p>
        </button>
      </Btns>
    </Contaianer>
  );
};

export default NeedLogin;
