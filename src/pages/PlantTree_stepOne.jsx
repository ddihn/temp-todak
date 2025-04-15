import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledPlantTree.module.css";

function PlantTreeStepOne() {
  const navigate = useNavigate();
  const [treeName, setTreeName] = useState("");
  const [callName, setCallName] = useState("");

  // 컴포넌트 렌더링 시 localStorage에서 값 불러오기
  useEffect(() => {
    const savedTreeName = localStorage.getItem("treeName");
    const savedCallName = localStorage.getItem("callName");

    if (savedTreeName) setTreeName(savedTreeName);
    if (savedCallName) setCallName(savedCallName);
  }, []);

  // localStorage에 입력값 저장
  useEffect(() => {
    if (treeName) localStorage.setItem("treeName", treeName);
    if (callName) localStorage.setItem("callName", callName);
  }, [treeName, callName]);

  async function GoToNext() {
    console.log("clicked!");
    navigate("/plantTreeStepTwo", {
      state: {
        treeName: treeName,
        myName: callName,
      },
    });
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
        <div className={styles.plantTreeWp}>
          <div className={styles.ptTitle}>기억 나무 심기</div>
          <img
            className={styles.ptImg}
            src="/img/tree-icon.png"
            alt="tree icon"
          />
          <div className={styles.step}>STEP 1</div>
          <img src="/img/line.png" alt="line" className={styles.line} />
          <div className={styles.treeNameWp}>
            <img src="/img/step1_1.png" alt="1" className={styles.stepOne1} />
            <div className={styles.treeTitle}>기억 나무 이름</div>
            <input
              name="treename"
              type="text"
              placeholder="나무의 이름을 정해주세요."
              className={styles.treeNameInput}
              value={treeName}
              onChange={(e) => setTreeName(e.target.value)}
            />
          </div>
          <div className={styles.callNameWp}>
            <img src="/img/step1_2.png" alt="1" className={styles.stepOne2} />
            <div className={styles.callTitle}>나의 호칭</div>
            <input
              name="callname"
              type="text"
              placeholder="나무가 부를 나의 호칭을 적어주세요."
              className={styles.callNameInput}
              value={callName}
              onChange={(e) => setCallName(e.target.value)}
            />
          </div>
        </div>
        <div
          className={styles.nextBtn}
          style={{ zIndex: "100" }}
          onClick={GoToNext}
        >
          다음 단계로
        </div>
      </div>
    </div>
  );
}

export default PlantTreeStepOne;
