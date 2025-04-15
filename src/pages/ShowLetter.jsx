import React, { useEffect, useState, useRef } from "react";
import styles from "../css/StyledShowLetter.module.css";
import LetterDetail from "./LetterDetail";

function ShowLetter({ onClose, treeId }) {
  const [letters, setLetters] = useState([]);
  const containerRef = useRef(null);
  const [selectedLetterId, setSelectedLetterId] = useState(null);
  const detailRef = useRef(null);

  useEffect(() => {
    // localStorage에서 편지 데이터 가져오기
    const savedLetters = localStorage.getItem("saved_letters");
    if (savedLetters) {
      try {
        const parsedLetters = JSON.parse(savedLetters);
        // treeId에 맞는 편지들만 필터링
        const filteredLetters = parsedLetters.filter(
          (letter) => letter.rememberTree === treeId
        );
        setLetters(filteredLetters);
      } catch (error) {
        console.error("Failed to parse letters from localStorage", error);
      }
    }
  }, [treeId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        (!detailRef.current || !detailRef.current.contains(event.target))
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleLetterClick = (letterId) => {
    setSelectedLetterId(letterId);
  };

  const handleDetailClose = () => {
    setSelectedLetterId(null);
  };

  const selectedLetter = letters.find(
    (letter) => letter.id === selectedLetterId
  );

  return (
    <div className={styles.overlay}>
      <img
        src="/img/letterClose.png"
        className={styles.closeButton}
        onClick={onClose}
        alt="닫기"
      />
      <div
        className={`${styles.container} ${styles.fadeIn}`}
        ref={containerRef}
      >
        {letters.map((letter, index) => (
          <div
            key={index}
            className={styles.innerContainer}
            onClick={() => handleLetterClick(letter.id)}
          >
            <div className={styles.letterWp}>
              <img src="/img/letterPreview.png" alt="미리보기" />
              <div className={styles.content}>{letter.content}</div>
            </div>
            <div className={styles.letterInfo}>
              <img
                src={letter.writer?.profile || "/img/profTemp.png"}
                className={styles.profileImg}
                alt="프로필 이미지"
                style={{ width: "34px", height: "34px", borderRadius: "50%" }}
              />
              <div className={styles.userInfo}>
                <div className={styles.user}>
                  {letter.writer?.nickname || "익명"}
                </div>
                <div className={styles.title}>
                  {letter.content.slice(0, 50)}
                </div>
              </div>
              <div className={styles.date}>
                {letter.timestamp?.slice(0, 10) || "날짜 없음"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedLetter && (
        <div ref={detailRef}>
          <LetterDetail letter={selectedLetter} onClose={handleDetailClose} />
        </div>
      )}
    </div>
  );
}

export default ShowLetter;
