import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../css/StyledWrittenMessage.module.css";

function WrittenMessage() {
  const [messages, setMessages] = useState([]);
  const [hoveredId, setHoveredId] = useState(null); // New state for hovered message ID

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/message/my-messages/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <img
        src="/img/mypageBg.png"
        alt="bgimg"
        style={{ width: "100%", minHeight: "1000px", objectFit: "cover" }}
        className={styles.containerBg}
      />
      <div className={styles.logo}>
        <img src="/img/writtenMessage.png" alt="로고" />
      </div>
      <div className={styles.latest}>
        최신순
        <span
          style={{
            fontSize: "23px",
            position: "relative",
            left: "15px",
            fontWeight: "400",
            color: "#627b00",
          }}
        >
          *글에 마우스를 가져다대면 작성한 추모글의 전체 내용을 볼 수 있습니다.
        </span>
      </div>
      <div className={styles.contentContainer}>
        {messages.length === 0 ? (
          <p style={{ fontSize: "40px", fontFamily: "Pretendard Variable" }}>
            아직 남긴 추모글이 없습니다.
          </p>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={styles.contentList}>
              <img
                src="/img/point.png"
                alt="점"
                style={{
                  width: "15px",
                  height: "15px",
                  position: "relative",
                  top: "20px",
                }}
              />
              <img
                src="/img/writtenline.png"
                alt="점"
                style={{
                  width: "2px",
                  height: "157px",
                  position: "relative",
                  top: "43px",
                  right: "8px",
                }}
              />
              <div className={styles.memorialHall}>{message.hallName}</div>
              <div className={styles.contentWp}>
                <div
                  className={`${
                    hoveredId === null
                      ? styles.content
                      : hoveredId === message.id
                      ? styles.thisContent
                      : styles.hovered
                  }`}
                  onMouseEnter={() => setHoveredId(message.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WrittenMessage;
