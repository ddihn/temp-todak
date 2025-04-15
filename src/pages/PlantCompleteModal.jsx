import { useNavigate } from "react-router-dom";
import styles from "../css/StyledPlantCompleteModal.module.css";

function PlantCompleteModal() {
  const navigate = useNavigate();
  function goToTree() {
    navigate("/rememberTree");
  }
  return (
    <div>
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <div className={styles.modal}>
          <img
            className={styles.treeImg}
            src="/img/completeTreeImg.png"
            alt="나무 이미지"
          />
          <div className={styles.completeMessage}>기억 나무를 심었어요!</div>
          <div className={styles.completeContent}>
            이제 나무는 당신과 함께 천천히 자라며 치유를 함께할 거예요. <br />
            화단에서 추억 책장과 우체통 기능도 이용해보세요.
          </div>
          <div className={styles.goTreeBtn} onClick={goToTree}>
            심은 나무 보러가기
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlantCompleteModal;
