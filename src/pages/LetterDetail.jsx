import React from "react";
import styles from "../css/StyledLetterDetail.module.css";

function LetterDetail({ letter, onClose }) {
  if (!letter) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.letterWp}>
          <div className={styles.letter}>
            <div className={styles.closeBtn} onClick={onClose}>
              <img src="/img/closeBtn2.png" alt="닫기 버튼" />
            </div>

            <div className={styles.content}>
              <img
                src="/img/letterPaper.png"
                alt="편지지"
                className={styles.contentImage}
              />
              <div className={styles.letterText}>{letter.content}</div>
              <div className={styles.writerInfo}>
                <img
                  src={letter.writer?.profile || "/img/profTemp.png"}
                  alt="작성자 프로필"
                  className={styles.profileImg}
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                />
                <span className={styles.nickname}>
                  {letter.writer?.nickname || "익명"}
                </span>
                <span className={styles.timestamp}>
                  {letter.timestamp?.slice(0, 10) || "날짜 없음"}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.letterTop}>
            <img src="/img/letterTop.png" alt="봉투 뚜껑" />
          </div>
          <img
            src="/img/letterBack.png"
            alt="뒷 배경"
            className={styles.letterBack}
          />
          <div className={styles.envelopMain}>
            <img src="/img/envelopMain.png" alt="봉투 메인" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetterDetail;
