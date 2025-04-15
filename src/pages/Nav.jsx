import { useState } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as M from "../css/StyledNav";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져오기 위한 훅
  const [token, setToken] = useState(localStorage.getItem("access_token")); // localStorage에서 토큰 가져오기
  const [userId, setUserId] = useState(null); // 추가: 사용자 ID 상태
  const [showLoginModal, setShowLoginModal] = useState(false); // 로그인 모달 창 보이기 여부 상태

  const goToRememberTree = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // 로그인 여부 확인
    if (isLoggedIn) {
      const treePlanted = localStorage.getItem("treePlanted");
      console.log("treePlanted:", treePlanted); // 값 확인용 로그 추가
      if (treePlanted === "true") {
        // localStorage는 항상 문자열로 저장되므로 "true"와 비교
        navigate("/rememberTree"); // 기억 나무 페이지로 이동
      } else {
        alert("기억나무를 생성해주세요.");
        navigate("/plantTreeStepOne"); // 나무 생성 페이지로 이동
      }
    } else {
      alert("로그인이 필요합니다."); // 로그인 모달을 보여줌
    }
  };

  return (
    <M.Nav>
      <M.Navbar>
        <M.NavItem isActive={location.pathname === "/"}>
          <a href="/">HOME</a>
          <hr />
        </M.NavItem>
        <M.NavItem isActive={location.pathname === "/memorialHallList"}>
          <a href="/memorialHallList">온라인 헌화</a>
          <hr />
        </M.NavItem>
        <M.NavItem isActive={location.pathname === "/rememberTree"}>
          <a onClick={goToRememberTree}>기억 나무</a>
          <hr />
        </M.NavItem>
        <M.NavItem isActive={location.pathname === "/memorialHallSignup"}>
          <a href="/memorialHallSignup">헌화 공간 신청</a>
          <hr />
        </M.NavItem>
      </M.Navbar>
    </M.Nav>
  );
};

export default Nav;
