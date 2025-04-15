import { styled, keyframes } from "styled-components";

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
export const Body = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0;
  padding: 0;
`;

export const Contaianer = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
  display: flex;
  position: relative;
  margin: 0;
  width: 100vw;
  height: 120vh;
  justify-content: center;
  align-items: center;
  background: url(${process.env.PUBLIC_URL}/img/Background_last.png);
  background-size: cover;
  background-position: center;
  flex-direction: column;
  position: relative;
  gap: 8vh;
`;
export const Title = styled.div`
  color: #3d4c00;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
export const Step1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 40px;
  background: linear-gradient(180deg, #f0ffc8 0%, #cce685 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  p {
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const SelectBtn = styled.label`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 350px;
  width: 160px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 40px;
  background: linear-gradient(180deg, #f0ffc8 0%, #cce685 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer; /* 포인터 커서 설정 */
  overflow: hidden; /* 내부 요소의 overflow를 숨김 */

  /* 내부 input 요소 스타일링 */
  input {
    opacity: 0; /* 실제 input 요소를 투명하게 만듦 */
    position: absolute; /* 부모 요소 내 절대 위치 설정 */
    top: 0;
    left: 0;
    width: 100%; /* 부모 요소와 동일한 크기 */
    height: 100%; /* 부모 요소와 동일한 크기 */
    cursor: pointer; /* 포인터 커서 설정 */
  }

  p {
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0; /* 기본 마진 제거 */
  }
`;

export const Step1Items = styled.div`
  z-index: 2;
  width: 60vw;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10vh;
`;
export const Step1Item = styled.div`
  display: flex;
  position: relative;
  left: 150px;
  flex-direction: row;
  input {
    margin-left: 10%;
    background: none;
    height: 30px;
    width: 500px;
    border: 0;
    border-bottom: 2px solid #3d4c00;
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 300;
  }
  #postNumber {
    margin-top: 80px;
  }
  input:focus {
    outline: none;
    background: none;
  }
  input::placeholder {
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 300;
    background: none;
  }
`;
export const Number = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${process.env.PUBLIC_URL}/img/SignupNumderWrap.svg);
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  margin-right: 20px;
  p {
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin: 0;
  }
`;
export const NavName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 6vh;
  p {
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  span {
    color: var(--, #3d4c00);
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;
export const Line = styled.div`
  z-index: 0;
  width: 2.5px;
  height: 50vh;
  position: absolute;
  left: 170px;
  top: 20px;
`;
export const BackBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114.866px;
  height: 77px;
  flex-shrink: 0;
  border-radius: 40px;
  background: var(--y, linear-gradient(180deg, #fff9e4 0%, #ffda57 100%));
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 5vw;
  bottom: 5vh;
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const NextBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114.866px;
  height: 77px;
  flex-shrink: 0;
  border-radius: 40px;
  background: var(--y, linear-gradient(180deg, #fff9e4 0%, #ffda57 100%));
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  right: 5vw;
  bottom: 5vh;
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const FinishBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 77px;
  flex-shrink: 0;
  border-radius: 40px;
  background: var(--y, linear-gradient(180deg, #fff9e4 0%, #ffda57 100%));
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  right: 5vw;
  bottom: 5vh;
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ErrorMessage = styled.div`
  color: #d34f48;
  font-size: 18px;
  margin-top: 5px;
  margin-left: 48px;
  font-weight: 500;
`;
export const SuccessMessage = styled.div`
  color: #839c20;
  font-size: 18px;
  margin-top: 5px;
  margin-left: 48px;
  font-weight: 500;
`;
