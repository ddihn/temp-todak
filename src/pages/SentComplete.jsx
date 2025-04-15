import React, { useState } from "react";
import Lottie from "react-lottie-player";
import Airplane from "../assets/Paperplane.json";
import styles from "../css/StyledSentComplete.module.css";
import ShowLetter from "../pages/ShowLetter.jsx";

function SentComplete({ onClose, treeId }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGoListClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className={`${styles.container} ${styles.fadeIn}`}
        onClick={handleClickInside}
      >
        <div className={styles.modal}>
          <div className={styles.closeBtn} onClick={onClose}>
            <img src="/img/closeBtn2.png" alt="Close" />
          </div>
          <div className={styles.completeMessage}>
            소중한 편지가 전달되었어요{" "}
          </div>
          <Lottie
            loop
            animationData={Airplane}
            play
            style={{
              width: "450px",
              height: "450px",
              left: "250px",
              bottom: "72px",
              position: "relative",
            }}
          ></Lottie>
          <div
            className={styles.completeContent}
            style={{ position: "relative", bottom: "200px" }}
          >
            소중한 마음을 담은 편지가 멀리멀리 날아가 하늘에까지 닿을 거예요.{" "}
            <br />
            깊이 간직한 내 마음은 편지 목록에서 다시 확인할 수 있어요.
          </div>
          <div className={styles.goList} onClick={handleGoListClick}>
            편지 목록 보기
          </div>
        </div>
      </div>

      {isModalVisible && (
        <ShowLetter onClose={handleCloseModal} treeId={treeId} />
      )}
    </>
  );
}

export default SentComplete;
