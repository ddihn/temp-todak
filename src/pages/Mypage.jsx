import styles from "../css/StyledMypage.module.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateTreeModal from "../pages/CreateTreeModal";

function Mypage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("access_token");
  const [username, setUsername] = useState(null);
  const [togetherDate, setTogetherDate] = useState(null);
  const [userId, setUserId] = useState(null);
  const [todayAnswers, setTodayAnswers] = useState(null);
  const [treeData, setTreeData] = useState(null);
  const baseUrl = "http://3.38.125.151";

  // Set the profile image URL conditionally
  const imageUrl = image
    ? `${baseUrl}${image}` // Profile image from server
    : `${process.env.PUBLIC_URL}/img/standardProfile.svg`; // Default image

  function GoModifyInfo() {
    navigate("/modifyInfo");
  }
  function GoWrittenMessage() {
    navigate("/writtenMessage");
  }
  function GoWreathList() {
    navigate("/wreathList");
  }
  function GoRememberTree() {
    if (!treeData || (Array.isArray(treeData) && treeData.length === 0)) {
      setShowModal(true);
    } else navigate("/rememberTree");
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/accounts/api/get-user-info-from-token/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("User info fetched successfully:", result);

        setImage(result.profile);
        setUsername(result.nickname);
        setUserId(result.userId);

        const dateJoined = new Date(result.dateJoined);
        const today = new Date();
        const timeDiff = today - dateJoined;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        console.log("Days since joining:", daysDiff);
        setTogetherDate(daysDiff + 1);

        if (result.userId) {
          const treeResponse = await fetch(
            `http://127.0.0.1:8000/rememberTree/user/${result.userId}/`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!treeResponse.ok) {
            throw new Error("Tree data fetch failed");
          }

          const treeResult = await treeResponse.json();
          console.log("Tree data fetched successfully:", treeResult);
          setTreeData(treeResult);
          console.log("flowerType:", treeResult.flowerType);
        }
      } catch (error) {
        console.error("Error fetching user info or tree data:", error);
      }
    };
    const fetchTodayAnswers = async () => {
      try {
        const response = await fetch(
          "http://3.38.125.151/daily-question/today-answers/",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          setTodayAnswers(result);
          console.log("Today's answers fetched successfully:", result);
        } else if (response.status === 404) {
          setTodayAnswers([]);
          return;
        } else {
          console.error("Failed to fetch today's answers");
        }
      } catch (error) {
        console.error("Error fetching today's answers:", error);
      }
    };

    if (token) {
      fetchUserInfo();
      fetchTodayAnswers();
    }
  }, [token]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profile", file);
      try {
        const response = await fetch(
          "http://3.38.125.151/accounts/api/update-profile-image/",
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Image upload failed");
        }
        if (response.status === 200) {
          const result = await response.json();
          setImage(result.profile.replace(baseUrl, ""));
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const getFlowerTypeInKorean = (flowerType) => {
    switch (flowerType) {
      case "zinnia":
        return "백일홍";
      case "hydrangea":
        return "수국";
      case "lily":
        return "백합";
      default:
        return "정보 없음";
    }
  };

  const getAnswerStateMessage = () => {
    if (!treeData || (Array.isArray(treeData) && treeData.length === 0)) {
      return "아직 기억나무가 없어요. 기억 나무를 생성해주세요.";
    } else if (!todayAnswers || todayAnswers.length === 0) {
      return "오늘 기억 나무의 질문에 답을 하지 않았어요!";
    } else {
      return "오늘 기억 나무의 질문에 답을 했어요!";
    }
  };

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <img
        src="/img/mypageBg.png"
        alt="bgimg"
        style={{ width: "100%", minHeight: "1000px", objectFit: "cover" }}
        className={styles.containerBg}
      />
      <div className={styles.logo}>
        <img src="/img/logo.png" alt="마이페이지 로고" />
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.profile}>
          <div className={styles.flex}>
            <div className={styles.profImg}>
              {image ? (
                <img
                  src={imageUrl}
                  alt="main"
                  style={{
                    width: "173px",
                    height: "173px",
                    borderRadius: "50%",
                  }}
                  className={styles.modifiedProf}
                />
              ) : (
                <img src="/img/mypageProfile.png" alt="프로필 사진" />
              )}
            </div>
            <input
              type="file"
              id="upload"
              className={styles.profileImgModifyBtn}
              style={{
                position: "absolute",
                top: "8%",
                zIndex: "1000",
                display: "none",
              }}
              onChange={handleImageUpload}
              accept="image/*"
            />
            <img
              src="/img/imgModifyBtn.png"
              alt="이미지 수정 버튼"
              className={styles.profileImgModifyBtn}
              onClick={() => document.getElementById("upload").click()}
            />
          </div>
        </div>
        <div className={styles.stateProfileFlex}>
          <div className={styles.userDetail}>
            <div className={styles.user}> {username} 님</div>
            <div className={styles.days}>함께한지 {togetherDate}일째</div>
            <div className={styles.answerState}>{getAnswerStateMessage()}</div>
          </div>
          <div className={styles.state}>
            <div className={styles.treeState}>
              &nbsp;
              {!treeData || (Array.isArray(treeData) && treeData.length === 0)
                ? "나무 없음 | "
                : "새싹  |"}
              &nbsp;
            </div>
            <div className={styles.flowerState}>
              {!treeData || (Array.isArray(treeData) && treeData.length === 0)
                ? " "
                : getFlowerTypeInKorean(treeData[0].flowerType) + " | "}
            </div>
            <div className={styles.plantDateState}>
              &nbsp;{togetherDate}일 째
            </div>
          </div>
        </div>
      </div>
      <div className={styles.modifyBtn} onClick={GoModifyInfo}>
        회원 정보 수정
      </div>
      <div className={styles.list}>
        <div className={styles.write} onClick={GoWrittenMessage}>
          <img src="/img/mypageWrite.png" alt="내가 남긴 추모글" />
          내가 남긴 추모글
        </div>
        <div className={styles.flower} onClick={GoWreathList}>
          <img src="/img/mypageFlower.png" alt="헌화 내역" />
          헌화 내역
        </div>
        <div className={styles.rememberTree} onClick={GoRememberTree}>
          <img src="/img/mypageTree.png" alt="기억 나무" />
          나무와 대화하기
        </div>
        <CreateTreeModal show={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
}

export default Mypage;
