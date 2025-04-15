import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledGrowCompleteModal.module.css";

function GrowCompleteModal({ onClose }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleYesClick = () => {
    navigate("/deliveryProduct");
  };

  const handleNoClick = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={`${styles.container} ${styles.fadeIn}`}>
          <div className={styles.modal}>
            <img
              className={styles.growImg}
              src="/img/growComplete.png"
              alt="나무 이미지"
            />
            <div className={styles.completeMessage}>
              기억 나무가 다 자랐어요!
            </div>
            <div className={styles.completeContent}>
              기억 나무와 함께한 마음 치유 과정은 도움이 되셨나요? <br /> 성장한
              나무는 자택으로 배송받아 앞으로도 곁에서 쭉 지켜볼 수 있어요.{" "}
              <br /> <b>기억 나무 배송을 원하시나요?</b>
            </div>
            <div className={styles.no} onClick={handleNoClick}>
              아니요
            </div>
            <div className={styles.yes} onClick={handleYesClick}>
              네
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GrowCompleteModal;
