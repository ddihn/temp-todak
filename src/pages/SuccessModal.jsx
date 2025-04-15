import React from "react";
import styles from "../css/StyledSuccessModal.module.css";
import { navigate, useNavigate } from "react-router-dom";

const SuccessModal = ({ onClose }) => {
  const navigate = useNavigate();
  function GoRememberTree() {
    navigate("/rememberTree");
  }
  function GoMain() {
    navigate("/");
  }
  return (
    <div
      className={`${styles.container} ${styles.fadeIn} ${styles.modalOverlay}`}
    >
      <div className={styles.modalContent}>
        <img
          className={styles.growImg}
          src="/img/growComplete.png"
          alt="나무 이미지"
        />
        <div className={styles.completeMessage}>
          기억 나무 배송 신청이 완료되었습니다!
        </div>
        <div className={styles.completeContent}>
          선택하신 옵션의 결제와 배송 신청이 완료되었습니다. <br />
          배송은 평균 2~5일 소요, 택배사 사정에 따라 최대 2주까지 걸릴 수
          있습니다. <br /> 배송이 시작되면 이메일로 안내가 갈 예정입니다.
        </div>
        <div className={styles.rem} onClick={GoRememberTree}>
          기억 나무로 이동
        </div>
        <div className={styles.main} onClick={GoMain}>
          메인 홈으로 이동
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
