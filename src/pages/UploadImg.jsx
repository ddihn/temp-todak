import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledUploadImg.module.css";

function UploadImg({ onClose, treeId, onShowAlbum }) {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [com1, setCom1] = useState("");
  const [com, setCom] = useState("");
  const [date, setDate] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!image) {
      alert("이미지를 먼저 업로드 해주세요.");
      return;
    }

    const albumData = JSON.parse(localStorage.getItem("albumData")) || [];

    if (!isSaved) {
      const newIndex = albumData.length;
      const imageKey = `image_${treeId}_${newIndex}`;

      // 이미지 저장
      localStorage.setItem(imageKey, image);

      // 객체 생성
      const newEntry = {
        order: newIndex + 1,
        treeId: treeId,
        imageKey: imageKey,
        description: com,
        rememberDate: date,
        comment: com1,
      };

      // 앨범 데이터 업데이트
      const updatedAlbum = [...albumData, newEntry];
      localStorage.setItem("albumData", JSON.stringify(updatedAlbum));

      // 상태 업데이트
      setIsSaved(true);
      setShowSuccessMessage(true);
      setTransitionClass(styles.transitioning);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    } else {
      onShowAlbum();
    }
  };

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <input
        type="file"
        id="upload"
        className={styles.fileBtn}
        style={{
          position: "absolute",
          top: "8%",
          zIndex: "1000",
          display: "none",
        }}
        onChange={handleImageUpload}
        accept="image/*"
      />
      <div
        className={styles.uploadBtn}
        onClick={() => document.getElementById("upload").click()}
      >
        사진 업로드
      </div>
      <img
        className={styles.closeBtn}
        onClick={onClose}
        src="/img/closeBtn.png"
        alt="닫기버튼"
      />
      <div className={styles.imgWp}>
        <div className={styles.bg}>
          <img
            src="/img/uploadImgBg.png"
            alt="이미지 배경"
            className={styles.bgImg}
          />
        </div>
        <div className={styles.img}>
          {image ? (
            <img
              src={image}
              alt="main"
              className={styles.mainImg}
              style={{ width: "422px", height: "244px" }}
            />
          ) : (
            <img
              src="/img/defaultImg.png"
              alt="main"
              className={styles.mainImg}
            />
          )}
        </div>
        <div className={styles.comment}>
          <input
            type="text"
            className={styles.com}
            placeholder="코멘트를 입력해주세요."
            value={com}
            onChange={(e) => setCom(e.target.value)}
          />
          <input
            type="date"
            className={styles.date}
            placeholder="YYYY-MM-DD"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.commentWp}>
        <input
          type="text"
          className={styles.com1}
          placeholder="언제 찍었던 사진인가요?"
          value={com1}
          onChange={(e) => setCom1(e.target.value)}
        />
      </div>
      <div
        className={`${styles.saveBtn} ${transitionClass}`}
        onClick={handleSave}
      >
        {isSaved ? "앨범 보러가기" : "앨범에 저장"}
      </div>
      {showSuccessMessage && (
        <div className={styles.successMessage}>앨범에 저장되었습니다.</div>
      )}
    </div>
  );
}

export default UploadImg;
