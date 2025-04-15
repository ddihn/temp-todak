import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledShowAlbum.module.css";

function ShowAlbum({ onClose, treeId }) {
  const [albumData, setAlbumData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [noItemsMessage, setNoItemsMessage] = useState(false);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  // 로컬스토리지에서 저장된 이미지를 가져오는 함수
  const getImageFromLocalStorage = (key) => {
    const image = localStorage.getItem(key);
    return image ? image : "/img/default.png";
  };

  useEffect(() => {
    const savedAlbumData = JSON.parse(localStorage.getItem("albumData"));
    if (savedAlbumData) {
      setAlbumData(savedAlbumData);
    } else {
      setNoItemsMessage(true);
    }
  }, []);

  useEffect(() => {
    if (albumData.length === 0) {
      setNoItemsMessage(true);
      const timer = setTimeout(() => {
        setNoItemsMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [albumData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = albumData.slice(indexOfFirstItem, indexOfLastItem);

  const renderAlbumItem = (item, index) => {
    const imageUrl = getImageFromLocalStorage(item.imageKey);

    switch (index % 4) {
      case 0:
        return (
          <div key={index} className={styles.img1}>
            <img
              className={styles.imgBg}
              src="/img/imgBg.png"
              alt="bg"
              style={{ height: "240px" }}
            />
            <img
              src={imageUrl}
              alt="img"
              className={styles.defaultImg}
              style={{ width: "320px", height: "160px" }}
            />
            <div className={styles.rightB}></div>
            <div className={styles.leftB}></div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.description}</div>
              <div className={styles.date}>{item.rememberDate}</div>
            </div>
          </div>
        );
      case 1:
        return (
          <div key={index} className={styles.img2}>
            <img
              src="/img/polaBg.png"
              alt="pola"
              className={styles.imgbg}
              style={{ height: "320px" }}
            />
            <img
              src={imageUrl}
              alt="img"
              className={styles.defaultImg}
              style={{ width: "233px", height: "230px" }}
            />
            <div className={styles.sticker}>
              <img src="/img/sticker.png" alt="" />
            </div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.description}</div>
              <div className={styles.date}>{item.rememberDate}</div>
            </div>
            <div className={styles.mainComWp}>
              <img src="/img/comPaper.png" alt="memo" />
              <div className={styles.mainCom}>{item.comment}</div>
            </div>
          </div>
        );
      case 2:
        return (
          <div key={index} className={styles.img3}>
            <img
              src="/img/imgBg.png"
              alt="bg"
              className={styles.imgbg}
              style={{ height: "240px" }}
            />
            <img
              src={imageUrl}
              alt="img"
              className={styles.defaultImg}
              style={{ width: "320px", height: "160px" }}
            />
            <div className={styles.clip}>
              <img src="/img/clip.png" alt="" />
            </div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.description}</div>
              <div className={styles.date}>{item.rememberDate}</div>
            </div>
            <div className={styles.mainComWp}>
              <img src="/img/comPaper2.png" alt="memo" />
              <div className={styles.mainCom2}>{item.comment}</div>
            </div>
          </div>
        );
      case 3:
        return (
          <div key={index} className={styles.img4}>
            <img
              src="/img/imgbg.png"
              alt="bg"
              className={styles.imgbg}
              style={{ height: "240px" }}
            />
            <img
              src={imageUrl}
              alt="img"
              className={styles.defaultImg}
              style={{ width: "320px", height: "160px" }}
            />
            <div className={styles.rightB}></div>
            <div className={styles.leftB}></div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.description}</div>
              <div className={styles.date}>{item.rememberDate}</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const totalPages = Math.ceil(albumData.length / itemsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      alert("이전 페이지가 없습니다.");
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("다음 페이지가 없습니다.");
    }
  };

  if (!showModal) return null;

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <div className={styles.albumWp}>
        {showModal && (
          <div className={styles.closeBtn} onClick={() => setShowModal(false)}>
            앨범 닫기
          </div>
        )}
        <div className={styles.album}>
          <img className={styles.albumImg} src="/img/albumBg.png" alt="album" />
          {currentItems.map((item, index) => renderAlbumItem(item, index))}
        </div>
      </div>
      <div className={styles.pagination}>
        <div
          className={`${styles.paginationButton} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
          onClick={handlePrevClick}
        >
          <img src="/img/albumBack.png" alt="Previous" />
        </div>
        <span className={styles.pageNumber}>
          <span className={styles.cur}>{currentPage}</span>
          <span className={styles.slash}> / </span>
          <span className={styles.tot}>{totalPages}</span>
        </span>
        <div
          className={`${styles.paginationButton} ${
            currentPage === totalPages ? styles.disabled : ""
          }`}
          onClick={handleNextClick}
        >
          <img src="/img/albumFront.png" alt="Next" />
        </div>
      </div>
      {noItemsMessage && (
        <div className={styles.noPagesMessage}>
          <p>앨범에 사진이 없습니다.</p>
        </div>
      )}
    </div>
  );
}

export default ShowAlbum;
