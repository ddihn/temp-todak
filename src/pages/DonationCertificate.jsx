import React from "react";
import styles from "../css/StyledDonation.module.css";
import { useNavigate } from "react-router-dom";

const DonationCertificate = ({ name, onClose }) => {
  const navigate = useNavigate();
  console.log("name in DonationCertificate:", name); 
  const handleNav = () => {
    if (onClose) onClose();
    navigate("/");
  };

  // 현재 시간을 가져옵니다.
  const currentDateTime = new Date();
  const formattedDate = currentDateTime
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/(\d{4})\.(\d{2})\.(\d{2})/, "$1년 $2월 $3일");
  const formattedTime = currentDateTime.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.image}>
          <p className={styles.title}>헌화 기부증서</p>
          <p className={styles.name}>{name}</p> {/* 여기가 중요합니다 */}
          <p className={styles.content}>
            {formattedDate} 뜻깊은 헌화를 통해 우리에게
            <br />
            있었던 가슴 아픈 일을 잊지 않고 추모합니다.
            <br />
            보내주신 헌화금은 다시는 같은 일이 반복되지 않도록,
            <br />
            유가족의 뜻을 이어 받아 더 나은 사회로 발전할 수 있도록,
            <br />
            같은 아픔과 상처를 가진 사람들이 서로를 보듬어 줄 수
            <br />
            있도록 관련 재단에 소중히 쓰일 예정입니다.
            <br />
            감사 인사를 담아 이 기부 증서를 드립니다.
          </p>
        </div>
        <div className={styles.btns}>
          <button className={styles.goLoginBtn} onClick={handleNav}>
            <p className={styles.btnp}>닫기</p>
          </button>
          <button className={styles.goLoginBtn} onClick={handleNav}>
            <p className={styles.btnp}>저장하기</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default DonationCertificate;
