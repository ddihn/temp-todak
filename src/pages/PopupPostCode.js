import React from "react";
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = ({ onClose, onSelect }) => {
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    onSelect({ address: fullAddress, zonecode: data.zonecode });
  };

  const postCodeStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "500px",
    padding: "60px 20px 0px",
    background: "linear-gradient(180deg, #F0FFC8 0%, #CCE685 100%)",
    borderRadius: "40px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const postCodeBtn = {
    position: "absolute",
    top: "20px",
    right: "25px",
    padding: "10px 20px",
    background: "linear-gradient(180deg, #8EB200 0%, #3D4C00 100%)",
    backgroundColor: "#CCE685",
    border: "none",
    borderRadius: "5px",
    color: "#333",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    fontSize: "20px",
    fontWeight: "1000",
    borderRadius: "40px",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
        }}
      >
        <div style={postCodeStyle}>
          <DaumPostcode onComplete={handlePostCode} />
          <button type="button" onClick={onClose} style={postCodeBtn}>
            닫기
          </button>
        </div>
      </div>
    </>
  );
};

export default PopupPostCode;
