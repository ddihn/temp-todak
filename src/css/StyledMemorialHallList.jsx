import { styled, keyframes } from "styled-components";

// Define the fade-in keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Body = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  animation: ${fadeIn} 1s ease-in-out; // Apply the fade-in animation
`;

export const Container = styled.div`
  width: 100vw;
  max-height: 150vh;
  height: auto;
  box-sizing: border-box;
  background: linear-gradient(180deg, #c3c3c3 0%, #fff 48%);
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  padding-bottom: 10vh;
  gap: 5vh;
`;
export const TitleContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.div`
  color: var(--, #2b2b2b);
  font-family: "Pretendard Variable";
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
export const InputOption = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  gap: 3vw;
`;
export const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 35vw;
  gap: 10px;
  width: 650px;
  height: 50px;
  border-radius: 40px;
  background: linear-gradient(0deg, #ebebeb 0%, #fff 48%);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  img {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
  }
  input {
    color: #6f6f6f;
    font-family: "Pretendard Variable";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    width: 550px;
    border: none;
    background: none;
  }
  input:focus {
    outline: none;
    background: none;
  }
`;
export const Option = styled.div`
  background: none;
  height: 30px;
  width: 30vw;
  option {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: none;
    outline: none;
  }
  #options {
    background: none;
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 0;
    border-bottom: 2px solid #2b2b2b;
    outline: none;
  }
`;
export const ListContent = styled.div`
  height: 80vh;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 4vw;
  .upper-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 4vw;
  }
  .lower-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 4vw;
  }
`;
export const ListContentItem = styled.div`
  /* Hover 시 스타일 */
  &:hover #img {
    filter: brightness(50%); /* 이미지 어두워지기 */
  }

  /* 버튼 스타일 */
  .hover-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0); /* 배경 반투명 검정 */
    color: #ffda57;
    font-family: "Pretendard Variable";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 0.5rem 1rem;
    border-radius: 40px;
    border: 2px solid #ffda57;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    display: none; /* 기본적으로 숨김 */
    transition: opacity 0.3s ease; /* 버튼 전환 효과 */
  }

  /* Hover 시 버튼 표시 */
  &:hover .hover-button {
    display: block; /* 버튼 표시 */
  }
`;
export const ListContentImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 21vw;
  height: 22vh;
  overflow: hidden;
  border-radius: 1.875rem 1.875rem 0rem 0rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  #img {
    width: 120%;
    height: 120%;
  }
`;
export const ListContentInfo = styled.div`
  width: 21vw;
  min-height: 13vh;
  height: auto;
  padding-right: 2vw;
  padding-left: 2vw;
  box-sizing: border-box;
  border-radius: 0rem 0rem 1.875rem 1.875rem;
  background: linear-gradient(0deg, #ebebeb 0%, #fff 48%);
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
export const C1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #2b2b2b;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 2vh;
  img {
    padding-top: 0.3rem;
    padding-left: 0.3rem;
  }
`;
export const C2 = styled.div``;
export const C3 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: 3vh;
  padding-bottom: 2vh;
  position: relative;
`;
export const C4 = styled.div`
  color: #6f6f6f;
  font-family: "Pretendard Variable";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  position: absolute;
  left: 0;
`;
export const C5 = styled.div`
  color: #6f6f6f;
  font-family: "Pretendard Variable";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
  right: 0;
  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    margin-right: 0.5rem;
    margin-left: 1rem;
  }
  #lotus {
    background: url(${process.env.PUBLIC_URL}/img/lotus.svg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 1.375rem;
    height: 1rem;
  }
  #feather {
    background: url(${process.env.PUBLIC_URL}/img/feather.svg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 1.25rem;
    height: 1.1rem;
  }
`;
export const NumberBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* 버튼 간의 간격 조절 */
  margin-top: 2rem; /* 페이지네이션 위 여백 */
  margin-bottom: 2rem; /* 페이지네이션 아래 여백 */

  button {
    border: none;
    background: linear-gradient(0deg, #adadad 0%, #ebebeb 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
    font-family: "Pretendard Variable";
    font-size: 1.5rem;
    font-weight: 700;
    color: #2b2b2b;
    cursor: pointer;

    &:disabled {
      background: #e0e0e0;
      cursor: not-allowed;
    }
  }

  span {
    font-family: "Pretendard Variable";
    font-size: 1.5rem;
    font-weight: 700;
    color: #2b2b2b;
  }
`;
