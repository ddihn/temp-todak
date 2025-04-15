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
  overflow-y: hidden;
`;
export const Container = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
  position: relative;
  width: 100vw;
  height: 130vh;
  background: linear-gradient(180deg, #c3c3c3 0%, #fff 48%);
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;
export const Title = styled.div`
  color: #2b2b2b;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 10vh;
`;
export const SignupItems = styled.div`
  z-index: 2;
  width: 60vw;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10vh;
`;
export const SignupItem = styled.div`
  display: flex;
  flex-direction: row;
  fieldset {
    height: 30px;
    width: 30px;
  }

  #memorialmessage {
    margin-left: 10%;
    background: none;
    height: 30px;
    width: 25rem;
    border: 0;
    border-bottom: 2px solid #2b2b2b;
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 300;
    position: absolute;
    right: 0;
  }
  #name {
    margin-left: 10%;
    background: none;
    height: 1.5rem;
    width: 10rem;
    border: 0;
    border-bottom: 2px solid #2b2b2b;
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 300;
    position: absolute;
    right: 15rem;
  }
  textarea:focus {
    outline: none;
    background: none;
  }
  textarea::placeholder {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 1.3rem;
    font-weight: 300;
    background: none;
  }
  input:focus {
    outline: none;
    background: none;
    font-size: 24px;
    color: #2b2b2b;
    padding-bottom: 5px;
  }
  input::placeholder {
    color: #2b2b2b;
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
  background: url(${process.env.PUBLIC_URL}/img/NumberWrap2.svg);
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  margin-right: 20px;
  p {
    color: #2b2b2b;
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
    color: #2b2b2b;
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
  left: 22px;
  top: 20px;
`;
export const Guide = styled.div`
  margin-top: 10vh;
  color: #6f6f6f;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Pretendard Variable";
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const SelectBtn = styled.label`
  position: absolute;
  right: 20vw;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 127px;
  height: 47px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 2.5rem;
  background: var(--grey, linear-gradient(0deg, #adadad 0%, #ebebeb 100%));
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer; /* 포인터 커서 설정 */

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
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0; /* 기본 마진 제거 */
  }
`;
export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 5vw; /* 라벨 사이의 간격 */
  position: absolute;
  right: 10vw;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* 라벨과 입력 필드 간의 간격 */
    font-family: "Pretendard Variable";
    font-size: 1.5rem;
    font-weight: 600;
  }

  input[type="radio"] {
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid #2b2b2b; /* 선택되지 않은 상태의 경계 색상 */
    border-radius: 50%; /* 둥근 모양 */
    background: #fff; /* 기본 배경색 */
    cursor: pointer; /* 클릭 가능한 요소로 마우스 커서를 변경 */
    -webkit-appearance: none; /* 기본 스타일 제거 */
    appearance: none; /* 기본 스타일 제거 */

    &:checked {
      background: #2b2b2b; /* 선택된 상태의 배경색 */
      border: 2px solid #2b2b2b; /* 선택된 상태의 경계 색상 */
    }

    &:checked::before {
      content: ""; /* 체크 표시 */
      display: block;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background: #fff; /* 체크 표시의 배경색 */
      position: relative;
      top: 0.125rem; /* 위치 조정 */
      left: 0.125rem; /* 위치 조정 */
    }
  }
`;
