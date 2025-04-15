import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../css/StyledMain";
import Nav from "./Nav";
import Info from "./Info";
import NeedLogin from "./NeedLogin";

const Main = () => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [showLoginModal, setShowLoginModal] = useState(false);

  const goToRememberTree = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // 로그인 여부 확인
    console.log("isLoggedIn:", isLoggedIn); // 로그인 여부 확인
    if (isLoggedIn) {
      const treePlanted = localStorage.getItem("treePlanted");
      console.log("treePlanted:", treePlanted); // treePlanted 값 확인
      if (treePlanted === "true") {
        navigate("/rememberTree"); // 기억 나무 페이지로 이동
      } else {
        alert("기억나무를 생성해주세요.");
        navigate("/plantTreeStepOne"); // 나무 생성 페이지로 이동
      }
    } else {
      setShowLoginModal(true); // 로그인 모달을 보여줌
    }
  };

  const goToMemorialHall = () => {
    if (isLoggedIn) {
      navigate("/memorialHallList");
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <M.Body>
      <M.Container>
        {showLoginModal && <NeedLogin />}
        <Nav />
        <M.Content>
          <M.NavBtns>
            <M.NavBtnWrapper1>
              <M.NavBtnWrapper2>
                <a onClick={goToMemorialHall}>온라인 헌화</a>
              </M.NavBtnWrapper2>
            </M.NavBtnWrapper1>
            <M.NavBtnWrapper1>
              <M.NavBtnWrapper2>
                <a onClick={goToRememberTree}>기억 나무</a>
              </M.NavBtnWrapper2>
            </M.NavBtnWrapper1>
            <M.NavBtnWrapper1>
              <M.NavBtnWrapper2>
                <a href="/memorialHallSignup">
                  헌화 공간
                  <br />
                  신청
                </a>
              </M.NavBtnWrapper2>
            </M.NavBtnWrapper1>
          </M.NavBtns>
        </M.Content>
        <M.ImageGross>
          <img
            id="Gross"
            src={`${process.env.PUBLIC_URL}/img/Gross.png`}
            alt="Gross"
          />
        </M.ImageGross>
        <M.ScrollImage src="/img/scrollplz.png" alt="스크롤 유도" />
      </M.Container>

      {showInfo && <Info />}
    </M.Body>
  );
};

export default Main;
