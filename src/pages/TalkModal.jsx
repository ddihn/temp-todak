import { useState, useEffect, useRef } from "react";
import styles from "../css/StyledTalkModal.module.css";

import { useNavigate, useLocation } from "react-router-dom";

function TalkModal({ onClose, myname }) {
  const [getAnswer, setAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastTimer, setToastTimer] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hideAnswerWp, setHideAnswerWp] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);
  const location = useLocation();
  const [question, setQuestion] = useState("");
  // const question = "오늘 점심은 드셨나요? 맛있는 걸로 드셨나요?";
  const questRef = useRef(null);
  const answerWpRef = useRef(null);
  const chatBoxRef = useRef(null);
  const token = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  const [questionId, setQuestionId] = useState(null);
  const navigate = useNavigate();
  console.log("여부:", isSubmitted);

  // 토큰 갱신 함수
  async function refreshAccessToken() {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/accounts/token/refresh/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh: refreshToken }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("access_token", data.access);
        return data.access;
      } else {
        console.error("Failed to refresh access token");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        // Navigate to login page or handle the error accordingly
      }
    } catch (error) {
      console.error("Error refreshing access token:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "http://127.0.0.1:8000/rememberTree/daily-question/",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // 인증 오류 발생 시
        if (response.status === 401) {
          const newAccessToken = await refreshAccessToken();
          if (newAccessToken) {
            response = await fetch(
              "http://127.0.0.1:8000/rememberTree/daily-question/",
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${newAccessToken}`,
                },
              }
            );
          } else {
            return; // Token refresh failed
          }
        }

        //이미 답을 했을 때 자신이 한 답과 해당 질문 가져오기
        if (response.status === 404) {
          response = await fetch(
            "http://127.0.0.1:8000/daily-question/today-answers/",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          //자신이 한 답과 해당 질문 가져오기를 성공하면
          if (response.ok) {
            const jsonData = await response.json();
            if (jsonData.length > 0) {
              const answerData = jsonData[0];
              console.log("데이터3", answerData.answerText);
              console.log("데이터4", answerData.question.questionText);
              setQuestion(answerData.question.questionText);
              setSubmittedAnswer(answerData.answerText);
              setIsSubmitted(true);
            }
          }
        } else if (response.status === 200) {
          setIsSubmitted(false);
          const jsonData = await response.json();
          console.log("Response data222:", jsonData);

          if (Array.isArray(jsonData)) {
            if (jsonData.length > 0) {
              const answerData = jsonData[0];
              console.log("데이터3", answerData.answerText);
              console.log("데이터4", answerData.question.questionText);
              setQuestion(answerData.question.questionText);
              // setSubmittedAnswer(answerData.answerText);
            }
          } else {
            // Handle object response
            console.log("데이터", jsonData.questionText);
            setQuestion(jsonData.questionText);
            setQuestionId(jsonData.id);
          }
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    };

    fetchData();
  }, [token]);

  // useEffect(() => {
  //   const lastSubmissionDate = sessionStorage.getItem("lastSubmissionDate");
  //   const today = new Date().toISOString().split("T")[0];

  //   if (lastSubmissionDate === today) {
  //     setIsSubmitted(true);
  //     setHideAnswerWp(true);

  //     // const storedAnswer = sessionStorage.getItem("submitAns");
  //     // if (storedAnswer) {
  //     //   setSubmittedAnswer(storedAnswer);
  //     // }

  //     handleShowToast("5초 뒤에 대화가 닫힙니다.", 5000);
  //     const timer = setTimeout(() => {
  //       onClose();
  //     }, 5000);
  //     setCloseTimer(timer);
  //   }
  // }, [onClose]);

  async function submitAnswer() {
    if (!isSubmitted && getAnswer.trim() !== "") {
      const today = new Date().toISOString().split("T")[0];
      const payload = {
        question_id: questionId,
        answer_text: getAnswer,
      };

      try {
        let response = await fetch(
          "http://127.0.0.1:8000/rememberTree/daily-question/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
          }
        );

        if (response.status === 401) {
          // 인증 오류 발생 시
          const newAccessToken = await refreshAccessToken();
          if (newAccessToken) {
            response = await fetch(
              "http://127.0.0.1:8000/rememberTree/daily-question/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${newAccessToken}`,
                },
                body: JSON.stringify(payload),
              }
            );
          } else {
            return;
          }
        }

        if (response.ok) {
          const jsonData = await response.json();
          console.log("연동 완료");
          console.log("데이터:", jsonData.questionText);
          sessionStorage.setItem("lastSubmissionDate", today);
          sessionStorage.setItem("submitAns", getAnswer);
          setSubmittedAnswer(getAnswer);
          setIsSubmitted(true);
          setAnswer("");
          handleShowToast("배경을 클릭하면 5초 후 대화가 닫힙니다.", 3000);
        } else {
          console.error("Failed to submit data");
          handleShowToast(
            "데이터 제출에 실패했습니다. 다시 시도해주세요.",
            3000
          );
        }
      } catch (error) {
        console.error("An error occurred", error);
        handleShowToast(
          "데이터 제출 중 오류가 발생했습니다. 다시 시도해주세요.",
          3000
        );
      }
    } else if (isSubmitted) {
      handleShowToast("내일 다시 방문해주세요.", 3000);
    }
  }

  function handleShowToast(message, duration) {
    if (toastTimer) clearTimeout(toastTimer);
    setToastMessage(message);
    const timer = setTimeout(() => setToastMessage(""), duration);
    setToastTimer(timer);
  }

  useEffect(() => {
    if (questRef.current) {
      const questElement = questRef.current;
      setIsExpanded(questElement.scrollHeight > questElement.clientHeight);
    }
  }, [isSubmitted]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        answerWpRef.current &&
        !answerWpRef.current.contains(event.target) &&
        chatBoxRef.current &&
        !chatBoxRef.current.contains(event.target) &&
        questRef.current &&
        !questRef.current.contains(event.target)
      ) {
        if (isSubmitted) {
          if (closeTimer) clearTimeout(closeTimer);
          handleShowToast("5초 뒤에 대화가 닫힙니다.", 5000);
          const timer = setTimeout(() => {
            onClose();
          }, 5000);
          setCloseTimer(timer);
        } else {
          onClose();
        }
      } else {
        if (closeTimer) clearTimeout(closeTimer);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSubmitted, onClose, closeTimer]);

  return (
    <>
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <div className={styles.innerContainer}>
          <div className={styles.chatting}>
            <div
              className={`${styles.quest} ${
                isSubmitted ? styles.questShift : ""
              } ${isExpanded ? styles.expanded : ""}`}
              ref={questRef}
            >
              {myname}님 {question}
            </div>
            {isSubmitted && (
              <div className={styles.chatBox} ref={chatBoxRef}>
                {submittedAnswer}
              </div>
            )}
          </div>
          {!hideAnswerWp && (
            <div className={styles.answerWp} ref={answerWpRef}>
              <input
                name="answer"
                type="text"
                className={`${styles.answerBox} ${
                  isSubmitted ? styles.submitted : ""
                }`}
                placeholder={
                  isSubmitted
                    ? "나무의 질문은 하루에 하나 전송돼요. 내일 다시 당신의 이야기를 들려주세요."
                    : "질문에 대한 답을 입력해주세요."
                }
                value={getAnswer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={isSubmitted}
                onClick={() => {
                  if (isSubmitted) {
                    handleShowToast(
                      "내일 다시 방문해주세요. 배경을 클릭하면 5초 후 대화가 닫힙니다.",
                      3000
                    );
                  }
                }}
              />
              <div className={styles.submit}>
                <img
                  src="/img/answerSubmit.png"
                  alt="submit button"
                  onClick={submitAnswer}
                  style={{
                    cursor: isSubmitted ? "not-allowed" : "pointer",
                    filter: isSubmitted ? "grayscale(100%)" : "none",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}{" "}
    </>
  );
}

export default TalkModal;
