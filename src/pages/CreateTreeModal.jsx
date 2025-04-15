import React from "react";
import styles from "../css/StyledCreateTreeModal.module.css";
import { useNavigate } from "react-router-dom";

const CreateTreeModal = ({ show, onClose }) => {
  const navigate = useNavigate();

  if (!show) {
    return null;
  }

  function GoCreateTree() {
    navigate("/plantTreeStepOne");
  }

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <div className={styles.content}>
        <div className={styles.noTree}>아직 생성된 나무가 없어요.</div>
        <div className={styles.content}>
          <p>먼저 기억 나무를 생성한 후 나무와 대화해보세요.</p>
          <p>
            매일 질문에 대답하다보면 내 마음을 돌아보고 치유하는데 도움이
            될거에요.
          </p>
          <p className={styles.lastLine}>기억 나무를 생성하러 갈까요?</p>
        </div>
      </div>
      <div className={styles.yes} onClick={GoCreateTree}>
        네
      </div>
      <div className={styles.no} onClick={onClose}>
        아니요
      </div>
    </div>
  );
};

export default CreateTreeModal;
