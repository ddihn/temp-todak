import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../css/StyledMemorialHallSignup";
import Nav from "./Nav";

const MemorialHallSignup = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    info: "",
    date: "",
    visibility: "public",
    thumbnail: null,
  });

  const [selectedFileName, setSelectedFileName] = useState(""); // State for the selected file name

  const { name, info, date, visibility, thumbnail } = inputs;
  const token = localStorage.getItem("access_token"); // Use 'access_token' for JWT

  const onChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setInputs({
        ...inputs,
        [name]: value,
      });
    } else if (name === "thumbnail" && e.target.files.length > 0) {
      setInputs({
        ...inputs,
        thumbnail: e.target.files[0],
      });
      setSelectedFileName(e.target.files[0].name); // Update the selected file name
    } else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
  };

  const handleSaveBtn = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("info", info);
      formData.append("date", date);

      if (visibility === "public") {
        formData.append("public", true);
        formData.append("private", false);
      } else {
        formData.append("private", true);
        formData.append("public", false);
      }

      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/memorialHall",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Use 'Bearer' for JWT
          },
        }
      );

      if (response.status === 201) {
        alert("추모관 신청이 완료되었습니다.");
        navigate(`/memorialHallList`);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Unauthorized, possibly expired token
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        alert(
          "30분 동안 활동이 없어서 자동 로그아웃 되었습니다. 다시 로그인해주세요."
        );
        navigate("/login");
      } else {
        console.error("Error creating new post:", error);
        alert("Failed to create memorial hall. Please try again.");
      }
    }
  };

  return (
    <S.Body>
      <S.Container>
        <S.Content>
          <img
            id="flower"
            src={`${process.env.PUBLIC_URL}/img/flower.svg`}
            alt="flower"
          />
          <S.Title>온라인 헌화 추모관 신청</S.Title>

          <S.SignupItems>
            <S.Line>
              <img
                id="Logo"
                src={`${process.env.PUBLIC_URL}/img/Line_1.png`}
                alt="Logo"
              />
            </S.Line>
            <S.SignupItem>
              <S.Number>
                <p>1</p>
              </S.Number>
              <S.NavName>
                <p>추모관 이름</p>
              </S.NavName>
              <input
                id="hallname"
                name="name"
                placeholder="추모관 이름"
                value={name}
                onChange={onChange}
              />
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>2</p>
              </S.Number>
              <S.NavName>
                <p>추모일</p>
              </S.NavName>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="추모일"
                value={date}
                onChange={onChange}
              />
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>3</p>
              </S.Number>
              <S.NavName>
                <p>소개글</p>
              </S.NavName>
              <input
                id="introduce"
                name="info"
                placeholder="간단한 소개글을 적어주세요. (70자 이내)"
                value={info}
                onChange={onChange}
              />
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>4</p>
              </S.Number>
              <S.NavName>
                <p>공개/비공개</p>
              </S.NavName>
              <S.Checkbox>
                <label htmlFor="radio1">
                  <input
                    type="radio"
                    id="radio1"
                    name="visibility"
                    value="public"
                    checked={visibility === "public"}
                    onChange={onChange}
                  />
                  공개
                </label>

                <label htmlFor="radio2">
                  <input
                    type="radio"
                    id="radio2"
                    name="visibility"
                    value="private"
                    checked={visibility === "private"}
                    onChange={onChange}
                  />
                  비공개
                </label>
              </S.Checkbox>
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>5</p>
              </S.Number>
              <S.NavName>
                <p>
                  대표 사진 등록
                  <br />
                  <span>*선택사항</span>
                </p>
              </S.NavName>
              <S.SelectBtn>
                <input
                  type="file"
                  id="profile"
                  name="thumbnail"
                  onChange={onChange}
                />
                <p>사진 선택</p>
              </S.SelectBtn>
              {selectedFileName && (
                <p
                  style={{
                    marginLeft: "600px",
                    bottom: "-15px",
                    fontSize: "20px",
                    position: "absolute",
                    fontWeight: "400",
                  }}
                >
                  {selectedFileName}
                </p>
              )}
            </S.SignupItem>
          </S.SignupItems>
          <S.NextBtn onClick={handleSaveBtn}>
            <p>추모관 신청하기</p>
          </S.NextBtn>
        </S.Content>
      </S.Container>
    </S.Body>
  );
};

export default MemorialHallSignup;
