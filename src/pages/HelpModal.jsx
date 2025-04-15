import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../css/StyledHelpModal.module.css";
import { useNavigate } from "react-router-dom";

const HelpModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate("/deliveryProduct");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <div className={styles.innerContainer}>
        <div className={styles.closeBtn} style={{ zIndex: "1000" }}>
          <img
            src="/img/closeBtn.png"
            alt="닫기 버튼"
            onClick={onClose} // This will close the modal
          />
        </div>
        <Slider {...settings}>
          <div className={styles.pageOne}>
            <div className={styles.title}>기억나무 이용 가이드</div>
            <div className={styles.albumWp}>
              <img src="/img/albumGuide.png" alt="" />
              <div className={styles.a}>
                <div className={styles.subTitle}>추억 책장</div>
                <div className={styles.detail}>
                  기억하고 싶은 순간들을 사진과 <br />
                  코멘트를 달아 기록할 수 있어요.
                </div>
              </div>
            </div>
            <div className={styles.postBoxWp}>
              <img src="/img/postBoxGuide.png" alt="" />
              <div className={styles.p}>
                <div className={styles.subTitle}>마음 우체통</div>
                <div className={styles.detail}>
                  기억하고 싶은 상대에게 <br />
                  편지를 보내고 확인할 수 있어요.
                </div>
              </div>
            </div>
            <div className={styles.talkWp}>
              <img src="/img/talkGuide.png" alt="" />
              <div className={styles.t}>
                <div className={styles.subTitle}>나무와 대화하기</div>
                <div className={styles.detail}>
                  나무의 질문에 답하며 상실의 슬픔을 치유하고
                  <br />
                  나무를 성장 시킬 수 있어요.
                </div>
              </div>
            </div>
            <div className={styles.deliWp}>
              <img src="/img/deliGuide.png" alt="" />
              <div className={styles.d}>
                <div className={styles.subTitle}>기억 나무 배송 안내</div>
                <div className={styles.detail}>
                  처음 설정한 나무의 성장 시기가 지나면
                  <br /> 나무의 배송 유무를 선택하는 메일이 발송됩니다.
                  <br /> 내 곁에 기억 나무를 두고 오랫동안 기억해주세요.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pageTwo}>
            <div className={styles.title}>기억나무 성장 단계</div>
            <img
              src="/img/growBg.png"
              alt="배경"
              style={{
                width: "415px",
                height: "358px",
                position: "relative",
                left: "330px",
                bottom: "20px",
              }}
            />
            <img
              src="/img/growMotion.gif"
              alt="성장 단계"
              style={{
                width: "415px",
                height: "390px",
                position: "relative",
                left: "330px",
                bottom: "440px",
              }}
            />
            <div className={styles.growDetail}>
              기억나무는 설정한 애도 기간(기본 3개월)에 걸쳐 <br />{" "}
              <strong>새싹-어린나무-큰 나무-꽃 만개 단계로 성장</strong>
              합니다.
              <br /> 기억나무의 질문에 꾸준히 답하며 나무를 키우고
              <br /> 다 자란 나무의 <strong>테라리움을 직접 배송</strong>받아
              보세요. <br />
              <span className={styles.next}>
                다음으로 넘어가 기억나무 배송 과정 미리보기
              </span>
            </div>
          </div>
          <div className={styles.pageThr}>
            <div className={styles.modal}>
              <img
                className={styles.growImg}
                src="/img/growComplete.png"
                alt="나무 이미지"
              />
              <div className={styles.completeMessage}>
                기억 나무가 다 자랐어요!
              </div>
              <div className={styles.completeContent}>
                기억 나무와 함께한 마음 치유 과정은 도움이 되셨나요? <br />{" "}
                성장한 나무는 자택으로 배송받아 앞으로도 곁에서 쭉 지켜볼 수
                있어요. <br /> <strong>기억 나무 배송을 원하시나요?</strong>
              </div>
              <div className={styles.no} onClick={onClose}>
                아니요
              </div>
              <div className={styles.yes} onClick={handleYesClick}>
                네
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = ({ className, style, onClick }) => {
  return (
    <img
      src="/img/nextBtn.png"
      alt="다음 버튼"
      style={{
        width: "30px",
        height: "50px",
        position: "relative",
        left: "1040px",
        bottom: "745px",
        zIndex: "1000",
      }}
      className={className}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <img
      src="/img/prevBtn.png"
      alt="이전 버튼"
      style={{
        width: "30px",
        height: "50px",
        position: "relative",
        top: "400px",
        left: "20px",
        zIndex: "1000",
      }}
      className={className}
      onClick={onClick}
    />
  );
};

export default HelpModal;
