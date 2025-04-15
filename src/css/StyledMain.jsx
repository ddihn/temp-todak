import styled, { keyframes } from "styled-components";

// Define the fade-in from bottom animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scrollAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;
export const ScrollImage = styled.img`
  animation: ${scrollAnimation} 2s infinite;
`;
export const Body = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

// 최상위 요소
export const Container = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: linear-gradient(180deg, #ffda57 17.5%, #faffda 86%);
  img {
    -webkit-animation: sdb 2s infinite;
    box-sizing: border-box;
  }
`;

// 본문 내용
export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 85%;
  width: 100%;
`;

// 버튼들 모아서
export const NavBtns = styled.div`
  cursor: pointer;
  margin-top: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  height: 50%;
  gap: 5vw;
`;

// 버튼 wrapping 바깥쪽
export const NavBtnWrapper1 = styled.div`
  display: flex;
  width: 332px;
  height: 332px;
  flex-shrink: 0;
  border-radius: 50%; /* 원 형태 */
  background: rgba(253, 255, 227, 0.45);
  box-shadow: 0px 4px 12px 0px rgba(115, 156, 29, 0.25);
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out; /* 부드러운 크기 변환 효과 */

  &:hover {
    transform: scale(1.1);
  }
`;

// 버튼 wrapping 안쪽
export const NavBtnWrapper2 = styled.div`
  display: flex;
  width: 267px;
  height: 268px;
  flex-shrink: 0;
  border-radius: 50%; /* 원 형태 */
  background: rgba(253, 255, 227, 0.85);
  box-shadow: 0px 4px 12px 0px rgba(115, 156, 29, 0.25);
  justify-content: center;
  align-items: center;

  transition: transform 0.3s ease-in-out; /* 부드러운 크기 변환 효과 */

  a {
    text-decoration: none;
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  &:hover {
    transform: scale(1.2); /* 120% 커짐 */
  }
`;

// 맨 아래 이미지
export const ImageGross = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 30vh;

  img {
    height: 100%;
    width: 100%;
  }
`;
