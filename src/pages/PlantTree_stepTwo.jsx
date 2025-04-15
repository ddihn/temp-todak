import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../css/StyledPlantTree.module.css";
import CompleteModal from "../pages/PlantCompleteModal";

function PlantTreeStepTwo() {
  const navigate = useNavigate();
  const location = useLocation();
  const { treeName, myName } = location.state || {};
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [growthPeriod, setGrowthPeriod] = useState("3개월");
  const [customDate, setCustomDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 성장 기간 계산 함수
  function calculateThreeMonthsFromNow() {
    const today = new Date();
    today.setMonth(today.getMonth() + 3);
    return today.toISOString().split("T")[0];
  }

  // 블러 효과 적용 여부 확인 함수
  const isBlurred = (flower) => selectedFlower && selectedFlower !== flower;

  // 등록 버튼 클릭 시 실행
  function submit() {
    const payload = {
      treeName,
      myName,
      flowerType: selectedFlower || "",
      growthPeriod:
        growthPeriod === "3개월" ? calculateThreeMonthsFromNow() : customDate,
    };

    console.log(payload);

    // localStorage에 저장
    localStorage.setItem("treeName", treeName);
    localStorage.setItem("myName", myName);
    localStorage.setItem("selectedFlower", selectedFlower || "");
    localStorage.setItem(
      "growthPeriod",
      growthPeriod === "3개월" ? calculateThreeMonthsFromNow() : customDate
    );
    localStorage.setItem("treePlanted", "true"); // 나무 심었다는 표시 저장

    setIsModalVisible(true); // 모달을 띄운다
  }

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <img
        className={styles.conImg}
        src="/img/plantTree-bg.png"
        alt="plant tree background img"
        style={{ position: "absolute", zIndex: " -1" }}
      />
      <div className={styles.innerContainer}>
        <div className={styles.plantTreeWp2}>
          <div className={styles.ptTitle}>기억 나무 심기</div>
          <img
            className={styles.ptImg}
            src="/img/tree-icon.png"
            alt="tree icon"
          />
          <div className={styles.step}>STEP 2</div>
          <img src="/img/line.png" alt="line" className={styles.line2} />
          <div className={styles.selectFlowerWp}>
            <img src="/img/step2_3.png" alt="1" className={styles.stepTwo3} />
            <div className={styles.flowerTitle}>꽃 종류 선택</div>
            <div className={styles.selectFlower}>
              <div className={styles.sFNotice}>
                <li>
                  나무가 다 자라면 피울 꽃의 종류를 선택할 수 있어요.
                  <br />
                  꽃마다 각자 꽃말이 달라요.
                </li>
              </div>
              <div className={styles.flowerWp}>
                <div
                  className={`${styles.flowerContainer} ${
                    isBlurred("lily") ? styles.blurred : ""
                  }`}
                >
                  <img
                    src="/img/lily.png"
                    alt="lily"
                    className={styles.flo}
                    onClick={() => setSelectedFlower("lily")}
                  />
                  <div className={styles.lily}>백합</div>
                  <div className={styles.explainLily}>
                    '변함없는 사랑'이라는 뜻을 담고 있어요.
                  </div>
                </div>
                <div
                  className={`${styles.flowerContainer} ${
                    isBlurred("zinnia") ? styles.blurred : ""
                  }`}
                >
                  <img
                    src="/img/zinnia.png"
                    alt="zinna"
                    className={styles.flo}
                    onClick={() => setSelectedFlower("zinnia")}
                  />
                  <div className={styles.zinnia}>백일홍</div>
                  <div className={styles.explainZin}>
                    '떠나간 임을 그리다'라는 뜻을 담고 있어요.
                  </div>
                </div>
                <div
                  className={`${styles.flowerContainer} ${
                    isBlurred("hydrangea") ? styles.blurred : ""
                  }`}
                >
                  <img
                    src="/img/hydrangea.png"
                    alt="hydrangea"
                    className={styles.flo}
                    onClick={() => setSelectedFlower("hydrangea")}
                  />
                  <div className={styles.hydrangea}>수국</div>
                  <div className={styles.explainHyd}>
                    위로의 의미를 담고 있어요.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.growTimeWp}>
            <img src="/img/step2_4.png" alt="1" className={styles.stepTwo4} />
            <div className={styles.growTitle}>성장 기간 설정</div>
            <div className={styles.gTNotice}>
              <li>
                나무의 성장 기간은 기본 3개월이에요. 본인의 애도 기간에 따라
                설정할 수 있어요.
              </li>
              <li>
                이별 후 6개월~1년 간 힘든 감정을 느끼는 것은 지극히 정상적인
                애도의 과정입니다.
              </li>
              <li>성장 이후 기억 나무의 배송 유무 선택 알림이 발송됩니다.</li>
              <div className={styles.radioWp}>
                <input
                  type="radio"
                  id="3mon"
                  name="period"
                  value="3개월"
                  checked={growthPeriod === "3개월"}
                  onChange={(e) => setGrowthPeriod(e.target.value)}
                />
                <label className={styles.radioBtn} htmlFor="3mon">
                  <span className={styles.period}>3개월</span>
                </label>
                <input
                  type="radio"
                  id="userInput"
                  name="period"
                  value="직접 입력"
                  checked={growthPeriod === "직접 입력"}
                  onChange={(e) => setGrowthPeriod(e.target.value)}
                />
                <label className={styles.radioBtn} htmlFor="userInput">
                  <span className={styles.period}>직접 입력</span>
                </label>
              </div>
              {growthPeriod === "직접 입력" && (
                <div className={styles.customDateInput}>
                  <input
                    type="date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.nextBtn2} onClick={submit}>
          등록하기
        </div>
        {isModalVisible && <CompleteModal />}
      </div>
    </div>
  );
}

export default PlantTreeStepTwo;
