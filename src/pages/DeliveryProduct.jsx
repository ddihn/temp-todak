import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledDeliveryProduct.module.css";
import Nav from "./Nav";
function DeliveryProduct() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [terrariumSelected, setTerrariumSelected] = useState(false);
  const [albumSelected, setAlbumSelected] = useState(false);
  const [albumChoice, setAlbumChoice] = useState("");

  const TERRARIUM_PRICE = 10000;
  const ALBUM_30_PRICE = 40000;
  const ALBUM_50_PRICE = 50000;

  const calculateTotalPrice = () => {
    let total = 0;
    if (terrariumSelected) total += TERRARIUM_PRICE;
    if (albumChoice === "30page") total += ALBUM_30_PRICE;
    if (albumChoice === "50page") total += ALBUM_50_PRICE;
    return total;
  };

  const getSelectedItemsDescription = () => {
    const items = [];
    if (terrariumSelected)
      items.push(`테라리움 (+${TERRARIUM_PRICE.toLocaleString()}원)`);
    if (albumChoice === "30page")
      items.push(`맞춤 제작 앨범 30매 (+${ALBUM_30_PRICE.toLocaleString()}원)`);
    if (albumChoice === "50page")
      items.push(`맞춤 제작 앨범 50매 (+${ALBUM_50_PRICE.toLocaleString()}원)`);
    return items.length > 0 ? items.join("\n") : "선택된 품목이 없습니다.";
  };

  function handleOptionChange(event) {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === "full") {
      setTerrariumSelected(true);
      setAlbumSelected(true);
      setAlbumChoice("");
    } else if (value === "terrariumOnly") {
      setTerrariumSelected(true);
      setAlbumSelected(false);
      setAlbumChoice("");
    } else if (value === "albumOnly") {
      setTerrariumSelected(false);
      setAlbumSelected(true);
      setAlbumChoice("30page");
    }
  }

  function handleTerrariumChange() {
    if (!terrariumSelected) setTerrariumSelected(true);
  }

  function handleAlbumChange(event) {
    if (!albumSelected) setAlbumSelected(true);
    setAlbumChoice(event.target.value);
  }

  function GoToNext() {
    navigate("/deliveryInfo", {
      state: {
        totalAmount: calculateTotalPrice(),
        selectedItems: getSelectedItemsDescription(),
        terrariumSelected,
        albumChoice,
      },
    });
  }

  return (
    <>
      <div
        className={`${styles.container} ${styles.fadeIn}`}
        style={{
          backgroundImage: `url("/img/plantTree-bg.png")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.deliWp}>
          <div className={styles.top}>
            <div className={styles.boxImg}>
              <img src="/img/deliBox.png" alt="tree icon" />
            </div>
            <div className={styles.deliTitle}>기억 나무 배송</div>
          </div>
          <div className={styles.wp}>
            <div className={styles.optionWp}>
              <img src="/img/d_1.png" alt="" />
              <div className={styles.title}>배송 옵션 선택</div>
              <div className={styles.radioWp}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="full"
                    checked={selectedOption === "full"}
                    onChange={handleOptionChange}
                  />
                  풀옵션 (테라리움+맞춤 제작 앨범)
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="terrariumOnly"
                    checked={selectedOption === "terrariumOnly"}
                    onChange={handleOptionChange}
                  />
                  테라리움만
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="albumOnly"
                    checked={selectedOption === "albumOnly"}
                    onChange={handleOptionChange}
                  />
                  맞춤 제작 앨범만
                </label>
              </div>
            </div>
            <div className={styles.trWp}>
              <img src="/img/d_2.png" alt="" />
              <div className={styles.title}>테라리움</div>
              <div className={`${styles.radioWp} ${styles.tWp}`}>
                <img
                  src="/img/terrarium.png"
                  alt="terrarium"
                  className={styles.trImg}
                />
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="terrariumOption"
                    value="terrariumOnly"
                    checked={terrariumSelected}
                    onChange={handleTerrariumChange}
                    disabled={!terrariumSelected}
                  />
                  테라리움 (+{TERRARIUM_PRICE.toLocaleString()}원)
                </label>
                <div className={`${styles.explain} ${styles.tr}`}>
                  테라리움은 유리구 안에 식물이 살아 숨쉬는 작은 생태계를 구현한
                  정원입니다. <br /> 유리구 속 작은 나무, 이끼, 돌 등 식물
                  키트가 포함되어 있는 DIY 키트 형태로 배송됩니다.
                </div>
              </div>
            </div>
            <div className={styles.alWp}>
              <img src="/img/d_3.png" alt="" />
              <div className={styles.title}>맞춤 제작 앨범</div>
              <div className={styles.radioWp}>
                <label className={styles.radioLabel}>
                  <img
                    src="/img/delialbum.png"
                    alt="album"
                    className={styles.albumImg}
                  />
                  <input
                    type="radio"
                    name="albumOption"
                    value="30page"
                    checked={albumChoice === "30page"}
                    onChange={handleAlbumChange}
                    disabled={!albumSelected}
                  />
                  30매 (+{ALBUM_30_PRICE.toLocaleString()}원)
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="albumOption"
                    value="50page"
                    checked={albumChoice === "50page"}
                    onChange={handleAlbumChange}
                    disabled={!albumSelected}
                  />
                  50매 (+{ALBUM_50_PRICE.toLocaleString()}원)
                </label>
                <div className={styles.explain}>
                  맞춤 제작 앨범 안에는 추억 책장에 저장해둔 사진이 인화되어
                  나옵니다. (고급 양장본)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.totalWp}>
          <div className={styles.totalTitle}>총 금액</div>
          <div className={styles.selectedItems}>
            {getSelectedItemsDescription()
              .split("\n")
              .map((item, index) => (
                <div key={index}>{item}</div>
              ))}
          </div>
          <div className={styles.price}>
            <div className={styles.include}>배송비 포함 </div>
            <div className={styles.totalPrice}>
              {calculateTotalPrice().toLocaleString()}원
            </div>
          </div>
          <div className={styles.nextBtn} onClick={GoToNext}>
            다음
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryProduct;
