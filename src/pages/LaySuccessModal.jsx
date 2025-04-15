// LaySuccessModal.js

import React from "react";
import styles from "../css/StyledLaySuccessModal.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const LaySuccessModal = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hall = queryParams.get("hall"); // Retrieve hall from query params

  function GoMemorial() {
    navigate(`/memorialHall/${hall}`); // Redirect to memorial hall with hall query param
  }

  function GoMain() {
    navigate("/");
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <img
          className={styles.growImg}
          src="/img/lilyIcon.png"
          alt="국화 이미지"
        />
        <div className={styles.completeMessage}>헌화가 완료되었습니다!</div>
        <div className={styles.completeContent}>
          헌화해주신 금액은 관련 기관에 기부될 예정입니다. <br />
          따뜻한 관심에 감사드립니다.
        </div>
        <div className={styles.rem} onClick={GoMemorial}>
          추모관으로 이동
        </div>
        <div className={styles.main} onClick={GoMain}>
          메인 홈으로 이동
        </div>
      </div>
    </div>
  );
};

export default LaySuccessModal;
