import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "../css/StyledLogin";

const Login = () => {
  const [username, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // 서버 없이 하드코딩된 값으로 로그인 체크
    if (username === "admin" && password === "1234") {
      // 로그인 성공 시 토큰 없이 로컬 저장소에 로그인 상태 저장 (원하는 값으로 저장 가능)
      localStorage.setItem("isLoggedIn", "true");
      alert("로그인에 성공했습니다.");
      navigate("/", { replace: true });
      window.location.reload();
    } else {
      setError("아이디 혹은 비밀번호가 일치하지 않습니다.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <S.Body>
      <S.Container>
        <img
          id="Img"
          src={`${process.env.PUBLIC_URL}/img/TodakLogo5.svg`}
          alt="Img"
        />
        <S.Title>로그인</S.Title>
        <S.Step1Items>
          <S.Step1Item>
            <S.NavName>
              <p>아이디</p>
            </S.NavName>
            <input
              name="username"
              id="username"
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setId(e.target.value)}
            />
          </S.Step1Item>
          <S.Step1Item>
            <S.NavName>
              <p>비밀번호</p>
            </S.NavName>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="비밀번호"
              style={{
                width: "275px",
                position: "relative",
                marginLeft: "280px",
                fontSize: "40px",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.Step1Item>
        </S.Step1Items>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <S.LoginBtn onClick={handleLogin}>
          <p>로그인하기</p>
        </S.LoginBtn>
      </S.Container>
    </S.Body>
  );
};

export default Login;
