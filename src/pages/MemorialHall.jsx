// src/components/MemorialHall.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as H from "../css/StyledMemorialHall";
import Nav from "./Nav";
import axios from "axios";
import MemorialMessage from "./MemorialMessage1";
import MemorialMessage2 from "./MemorialMessage2";
import CountUpNumber from "./CountUpNumber";

const MemorialHall = () => {
  const navigate = useNavigate();
  const textareaRef = useRef(null);
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [inputs, setInputs] = useState({ content: "" });
  const { content } = inputs;
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("access_token");
  const [messages, setMessages] = useState([]);
  const [wreaths, setWreaths] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const halltoken = localStorage.getItem("halltoken");
  const [isLoading, setIsLoading] = useState(false);
  const memorialMessageContentsRef = useRef(null);
  const [countUpReset, setCountUpReset] = useState(false);
  const wreathCountRef = useRef(null);
  const messageCountRef = useRef(null);

  const handleUnauthorized = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    alert(
      "로그인한지 30분이지나 자동 로그아웃 되었습니다. 다시 로그인해주세요."
    );
    navigate("/login");
  };

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/memorialHall/${postId}/message?page=${page}`
        );
        console.log("추모글 조회 응답 데이터:", response.data);
        setMessages(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 3));
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchData(currentPage);
  }, [postId, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios.get(`/memorialHall/${postId}/wreath`);
        console.log("헌화한마디 응답 데이터 이건뭐지:", response.data);
        setWreaths(response.data);
      } catch (error) {
        console.error("Error fetching wreaths:", error);
      }
    };
    fetchDatas();
  }, [postId]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/memorialHall/${postId}`)
      .then((response) => {
        setPost(response.data);
        console.log("온라인 추모관 디테일 응답:", response.data);
        localStorage.setItem("halltoken", response.data.token);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [postId]);

  useEffect(() => {
    const fetchMessages = async (page = 1) => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/memorialHall/${postId}/message?page=${page}`
        );
        setMessages(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 3));
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessages(currentPage);
  }, [postId, currentPage]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/memorialHall/${postId}`)
      .then((response) => {
        setPost(response.data);
        console.log("온라인 추모관 디테일 응답:", response.data);
        localStorage.setItem("halltoken", response.data.token);
        console.log("프로필 이미지 URL:", response.data.profileImageUrl);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [postId]);

  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}년 ${month}월 ${day}일`;
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "20px";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [content]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handlePostBtn = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/memorialHall/${postId}/message`,
        { content, hall: postId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const newComment = response.data;
      setComments((prevComments) => [...prevComments, newComment]);
      setInputs({ content: "" });
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        handleUnauthorized();
      } else {
        console.error("Error creating new post:", error);
      }
    }
  };

  const copyCurrentURL = () => {
    const currentURL = window.location.href;
    let linkToCopy = currentURL;

    if (post) {
      if (post.private) {
        linkToCopy = `http://127.0.0.1:8000/memorialHall/${postId}/access?token=${halltoken}`;
      } else {
        linkToCopy = `http://127.0.0.1:8000/memorialHall/${postId}`;
      }
    }

    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        console.log("URL이 클립보드에 복사되었습니다.");
        alert("URL이 클립보드에 복사되었습니다.");
      })
      .catch((err) => {
        console.error("URL 복사 실패:", err);
      });
  };

  const navigateToLayFlower = () => {
    navigate(`http://127.0.0.1:8000/layFlower?hall=${postId}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountUpReset((prev) => !prev); // Toggle reset state
          }
        });
      },
      { threshold: 0.1 }
    );

    const wreathElement = wreathCountRef.current;
    const messageElement = messageCountRef.current;

    if (wreathElement instanceof Element) {
      observer.observe(wreathElement);
    }
    if (messageElement instanceof Element) {
      observer.observe(messageElement);
    }

    return () => {
      if (wreathElement instanceof Element) {
        observer.unobserve(wreathElement);
      }
      if (messageElement instanceof Element) {
        observer.unobserve(messageElement);
      }
    };
  }, []);

  return (
    <H.Body>
      <H.Container>
        <Nav />
        <H.Content>
          <img
            id="flower"
            src={`${process.env.PUBLIC_URL}/img/flower.svg`}
            alt="flower"
          />
          <H.mainImg>
            <H.Title>온라인 헌화</H.Title>
            <H.Wrap>
              <H.informationTitle>
                <p>{post && post.name}</p>
              </H.informationTitle>
            </H.Wrap>
            <H.Information>
              {post && formatDate(post.date)} 발생한 <br />
              {post && post.info}
            </H.Information>
          </H.mainImg>
          <H.Btns>
            <button id="copyPathBtn" onClick={copyCurrentURL}>
              <p id="btnp">링크 공유</p>
            </button>
            <button id="layFlowerBtn" onClick={navigateToLayFlower}>
              <p id="btnp">헌화하기</p>
            </button>
          </H.Btns>
        </H.Content>
        <H.BannerBottom>
          <H.BannerContent>
            지금까지의 헌화 수량
            <CountUpNumber
              style={{ fontFamily: "NanumBuJangNimNunCiCe" }}
              ref={wreathCountRef}
              end={3474}
              // end={post ? post.wreathCount : 0}
              unit=" 개"
            />
          </H.BannerContent>
          <H.BannerContent>
            보내주신 추모 글
            <CountUpNumber
              style={{ fontFamily: "NanumBuJangNimNunCiCe" }}
              ref={messageCountRef}
              end={12345}
              // end={post ? post.messageCount : 0}
              unit=" 개"
            />
          </H.BannerContent>
        </H.BannerBottom>

        <H.MemorialMessage>
          <p>남겨주신 헌화의 한 마디</p>
          <H.MemorialMessageContents
            ref={memorialMessageContentsRef}
            className="animated"
          >
            {wreaths.map((item) => (
              <MemorialMessage
                key={item.id}
                messageId={item.id}
                donation={item.donation}
                comment={item.comment}
                name={item.nickname}
                hall={item.hall}
                profile={item.profile}
                createdAt={item.createdAt}
              />
            ))}
          </H.MemorialMessageContents>
        </H.MemorialMessage>

        <H.MemorialMessage2>
          <H.MemorialMessage2Head>
            <img
              id="line"
              src={`${process.env.PUBLIC_URL}/img/Memoryhalls.png`}
              alt="line"
            />
            <p>추모의 글</p>
          </H.MemorialMessage2Head>

          <H.MemorialMessage2Input>
            <H.MM1>
              {/* <img
                id="profile"
                src={
                  post && post.profileImageUrl
                    ? `${post.profileImageUrl}?${new Date().getTime()}`
                    : `${process.env.PUBLIC_URL}/img/standardProfile.svg`
                }
                alt="profile" */}
            </H.MM1>
            <H.MM2>
              <textarea
                ref={textareaRef}
                value={content}
                name="content"
                onChange={onChange}
                placeholder="추모의 글을 남겨주세요. 욕설 및 비방이 담긴 글은 무통보 삭제될 수 있습니다."
              ></textarea>
              <div onClick={handlePostBtn} id="post">
                등록하기
              </div>
              <H.MemorialMessages2>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  messages.map((item) => (
                    <MemorialMessage2
                      key={item.id}
                      messageId={item.id}
                      content={item.content}
                      comment={item.comment}
                      hall={item.hall}
                      nickname={item.nickname}
                      profile={item.profile}
                      createdAt={item.createdAt}
                    />
                  ))
                )}
              </H.MemorialMessages2>
            </H.MM2>
          </H.MemorialMessage2Input>

          <H.NumberBtn>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ border: "none", background: "none", color: "black" }}
            >
              {"<"} {/* Previous button */}
            </button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{ border: "none", background: "none", color: "black" }}
            >
              {">"} {/* Next button */}
            </button>
          </H.NumberBtn>
        </H.MemorialMessage2>

        <H.NumberBtn>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"} {/* Previous button */}
          </button>
          <span>
            페이지 {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{ border: "none", background: "none", color: "black" }}
          >
            {">"} {/* Next button */}
          </button>
        </H.NumberBtn>
      </H.Container>
    </H.Body>
  );
};

export default MemorialHall;
