import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledRememberTree.module.css";
import HelpModal from "../pages/HelpModal";
import TalkModal from "../pages/TalkModal";
import UploadImg from "../pages/UploadImg";
import ShowAlbum from "../pages/ShowAlbum";
import WriteLetter from "../pages/WriteLetter";
import ShowLetter from "../pages/ShowLetter";

function RememberTree() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTalkModalOpen, setIsTalkModalOpen] = useState(false);
  const [isPostBoxHovered, setIsPostBoxHovered] = useState(false);
  const [isAlbumHovered, setIsAlbumHovered] = useState(false);
  const [isPostBoxClicked, setIsPostBoxClicked] = useState(false);
  const [isAlbumClicked, setIsAlbumClicked] = useState(false);
  const [isUploadImgOpen, setIsUploadImgOpen] = useState(false);
  const [isShowAlbumOpen, setIsShowAlbumOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isWriteLetterOpen, setIsWriteLetterOpen] = useState(false);
  const [isShowLetterOpen, setIsShowLetterOpen] = useState(false);
  const [treeName, setTreeName] = useState(""); // 이 값을 localStorage에서 불러와서 설정
  const [treeId, setTreeId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [username, setUserName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    } else {
      navigate("/login"); // 로그인 페이지로 리디렉션
    }

    // 로컬 스토리지에서 treeName 불러오기
    const storedTreeName = localStorage.getItem("treeName");
    if (storedTreeName) {
      setTreeName(storedTreeName); // treeName을 state에 설정
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return null; // 렌더링 안 함
  }

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const toggleTalkModal = () => {
    setIsTalkModalOpen((prev) => !prev);
  };

  const handleAlbumClick = () => {
    setIsAlbumClicked((prev) => !prev);
    if (!isAlbumClicked) {
      setIsPostBoxClicked(false);
    }
  };

  const handlePostBoxClick = () => {
    setIsPostBoxClicked((prev) => !prev);
    if (!isPostBoxClicked) {
      setIsAlbumClicked(false);
    }
  };

  const toggleUploadImgModal = () => {
    setIsUploadImgOpen((prev) => !prev);
  };

  const toggleShowAlbumModal = () => {
    setIsShowAlbumOpen((prev) => !prev);
  };

  const toggleWriteLetterModal = () => {
    setIsWriteLetterOpen((prev) => !prev);
  };

  const toggleShowLetterModal = () => {
    console.log("Toggling ShowLetter Modal");
    setIsShowLetterOpen((prev) => !prev);
  };

  const handleShowAlbum = () => {
    setIsUploadImgOpen(false);
    setIsShowAlbumOpen(true);
  };

  return (
    <>
      <div
        className={`${styles.container} ${styles.fadeIn}`}
        style={{ maxHeight: "1000px" }}
      >
        <img
          src="/img/plantTree-bg.png"
          alt="bgimg"
          style={{ width: "100%", minHeight: "1000px", objectFit: "cover" }}
          className="container-bg"
        />
        <div
          style={{ position: "absolute", width: "100%", marginTop: "100px" }}
        >
          <div className={styles.rememberTreeBox}>
            <div className={styles.treeName}>{treeName}</div>{" "}
            {/* 나무 위에 이름 표시 */}
            <img
              src="/img/help.png"
              alt="도움말 버튼"
              className={styles.helpBtn}
              style={{ width: "44px", height: "44px" }}
              onClick={toggleModal}
            />
            <div className={styles.rememberTreeInner}>
              <div className={styles.album}>
                {isAlbumClicked && (
                  <div className={styles.albumButtons}>
                    <div
                      className={styles.pbtns}
                      onClick={toggleUploadImgModal}
                    >
                      사진 업로드
                    </div>
                    <div
                      className={styles.abtns}
                      onClick={toggleShowAlbumModal}
                    >
                      앨범 보기
                    </div>
                  </div>
                )}
                <img
                  src={
                    isAlbumHovered ? "/img/hoverAlbum.png" : "/img/album.png"
                  }
                  onMouseEnter={() => setIsAlbumHovered(true)}
                  onMouseLeave={() => setIsAlbumHovered(false)}
                  onClick={handleAlbumClick}
                />
              </div>
              <img src="/img/rememberTree.png" />
              <div className={styles.postBox}>
                {isPostBoxClicked && (
                  <div className={styles.postBoxButtons}>
                    <div
                      className={styles.btns}
                      onClick={toggleWriteLetterModal}
                    >
                      편지 쓰기
                    </div>
                    <div
                      className={styles.btns}
                      onClick={toggleShowLetterModal}
                    >
                      편지 목록
                    </div>
                  </div>
                )}
                <img
                  src={
                    isPostBoxHovered
                      ? "/img/hoverPostBox.png"
                      : "/img/postBox.png"
                  }
                  onMouseEnter={() => setIsPostBoxHovered(true)}
                  onMouseLeave={() => setIsPostBoxHovered(false)}
                  onClick={handlePostBoxClick}
                />
              </div>
            </div>
            <div className={styles.talkBtn} onClick={toggleTalkModal}>
              나무와 대화하기
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <HelpModal onClose={toggleModal} />}
      {isTalkModalOpen && (
        <TalkModal onClose={toggleTalkModal} myname={username} />
      )}
      {isUploadImgOpen && (
        <UploadImg
          onClose={toggleUploadImgModal}
          treeId={treeId}
          onShowAlbum={handleShowAlbum}
        />
      )}
      {isShowAlbumOpen && (
        <ShowAlbum onClose={toggleShowAlbumModal} treeId={treeId} />
      )}
      {isWriteLetterOpen && (
        <WriteLetter
          onClose={toggleWriteLetterModal}
          treeId={treeId}
          userId={userId}
        />
      )}
      {isShowLetterOpen && (
        <ShowLetter
          onClose={toggleShowLetterModal}
          treeId={treeId}
          userId={userId}
        />
      )}
    </>
  );
}

export default RememberTree;
