import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledModifyInfo.module.css";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

const passwordRegEx =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function ModifyInfo() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [address, setAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) {
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
          console.log("Response status:", response.status);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log("User Data:", data);
          setUsername(data.username);
          setEmail(data.email);
          setNickname(data.nickname);
          setPhone(data.phone);
          setPostalAddress(data.postalAddress);
          setAddress(data.address);
          setZoneCode(data.zoneCode);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      };
      fetchUserInfo();
    }
  }, [token]);

  const openPostCode = () => setIsPopupOpen(true);
  const closePostCode = () => setIsPopupOpen(false);

  const handlePostCodeSelection = (data) => {
    setPostalAddress(data.address);
    setZoneCode(data.zonecode);
    closePostCode();
  };

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2,3})(\d{3,4})(\d{4})$/);
    return match ? `${match[1]}-${match[2]}-${match[3]}` : cleaned;
  };

  const handlePhoneNumberChange = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedNumber);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!emailRegEx.test(value)) {
      setEmailError("올바른 이메일 형식으로 입력하세요");
      setEmailSuccess("");
    } else {
      setEmailError("");
      setEmailSuccess("유효한 이메일 형식입니다.");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!passwordRegEx.test(value)) {
      setPasswordError("유효하지 않은 비밀번호 조합입니다.");
      setPasswordSuccess("");
    } else {
      setPasswordError("");
      setPasswordSuccess("사용가능한 비밀번호 조합입니다.");
    }
  };

  const handleSubmit = async (event) => {
    if (!username) {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!nickname) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    if (!phone) {
      alert("전화번호를 입력해주세요.");
      return;
    }
    if (!postalAddress) {
      alert("도로명 주소를 입력해주세요.");
      return;
    }
    if (!address) {
      alert("상세 주소를 입력해주세요.");
      return;
    }
    if (!zoneCode) {
      alert("우편번호를 입력해주세요.");
      return;
    }
    event.preventDefault();

    const formData = {
      new_username: username,
      password,
      email,
      nickname,
      phone,
      postalAddress,
      address,
      zoneCode,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/accounts/profile/update/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Network response was not ok:", errorText);
        throw new Error("Network response was not ok");
      }

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        alert("정보변경 성공");
        navigate("/mypage");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSaveClick = () => {
    document
      .getElementById("modifyForm")
      .dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  };

  // Remove conditional early returns here
  const isFormInvalid = emailError || passwordError;

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <img
        src="/img/mypageBg.png"
        alt="bgimg"
        style={{ width: "100%", minHeight: "1000px", objectFit: "cover" }}
        className={styles.containerBg}
      />
      <div className={styles.logo}>
        <img src="/img/modifyInfoLogo.png" alt="로고" />
      </div>
      <form id="modifyForm" onSubmit={handleSubmit} className={styles.infoWp}>
        <div className={`${styles.idWp} ${styles.wp}`}>
          <div className={styles.title}>아이디</div>
          <input
            type="text"
            className={styles.id}
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={`${styles.pwWp} ${styles.wp}`}>
          <div className={styles.title}>변경 비밀번호</div>
          <input
            type="password"
            className={styles.pw}
            placeholder="비밀번호 (영어, 숫자, 특수문자 조합 8자 이상)"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <div className={styles.pwError}>{passwordError}</div>
          )}
          {passwordSuccess && !passwordError && (
            <div className={styles.pwSuccess}>{passwordSuccess}</div>
          )}
        </div>
        <div className={`${styles.emailWp} ${styles.wp}`}>
          <div className={styles.title}>이메일</div>
          <input
            type="email"
            className={styles.email}
            placeholder="이메일"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div className={styles.emailError}>{emailError}</div>}
          {emailSuccess && !emailError && (
            <div className={styles.emailSuccess}>{emailSuccess}</div>
          )}
        </div>
        <div className={`${styles.nicknameWp} ${styles.wp}`}>
          <div className={styles.title}>닉네임</div>
          <input
            type="text"
            className={styles.nickname}
            placeholder="닉네임 (익명 보장)"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className={`${styles.telWp} ${styles.wp}`}>
          <div className={styles.title}>전화번호</div>
          <span className={styles.choice}>*선택사항</span>
          <input
            type="text"
            className={styles.tel}
            value={phone}
            onChange={handlePhoneNumberChange}
            maxLength="13"
          />
        </div>
        <div className={`${styles.addressWp} ${styles.wp}`}>
          <div className={`${styles.title} ${styles.addtitle}`}>배송 주소</div>
          <span className={styles.choice}>*선택사항</span>
          <div className={styles.addr}>
            <div className={styles.zoneCodeBtn} onClick={openPostCode}>
              우편번호 찾기
            </div>
            <div id="popupDom">
              {isPopupOpen && (
                <PopupDom>
                  <PopupPostCode
                    onClose={closePostCode}
                    onSelect={handlePostCodeSelection}
                  />
                </PopupDom>
              )}
            </div>
            <input
              type="text"
              className={styles.zoneCode}
              value={zoneCode}
              onChange={(e) => setZoneCode(e.target.value)}
              placeholder="우편번호"
            />
            <input
              type="text"
              className={styles.postalAddress}
              placeholder="도로명 주소"
              value={postalAddress}
              onChange={(e) => setPostalAddress(e.target.value)}
            />
            <input
              type="text"
              className={styles.detailAddress}
              placeholder="상세 주소 입력"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div onClick={handleSaveClick} className={styles.saveBtn}>
          변경 사항 저장
        </div>
      </form>
    </div>
  );
}

export default ModifyInfo;
