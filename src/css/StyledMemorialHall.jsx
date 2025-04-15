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
  animation: ${fadeIn} 1.5s ease-in-out;
`;
export const Container = styled.div`
  width: 100vw;
  background: linear-gradient(180deg, #c3c3c3 0%, #fff 48%);
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  padding-bottom: 10vh;
  background: linear-gradient(180deg, #c3c3c3 0%, #fff 48%);
`;
export const mainImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  height: 100vh;
  background: url(${process.env.PUBLIC_URL}/img/memorialHall_flower.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
export const Title = styled.div`
  position: absolute;
  top: 0;
  color: var(--, #2b2b2b);
  font-family: "Pretendard Variable";
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
export const Wrap = styled.div`
  position: absolute;
  top: 55%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  width: auto; /* 내용에 따라 가로 길이 조절 */
  max-width: 70vw; /* 최대 가로 길이 */
  box-sizing: border-box;
  padding-right: 0.5vw;
  padding-left: 0.5vw;
  padding-top: 1.1vh;
  padding-bottom: 1.1vh;
  flex-shrink: 0;
  background: #414141;
  box-shadow: 0px 7px 10px 0px rgba(0, 0, 0, 0.25) inset;
`;
export const informationTitle = styled.div`
  width: auto; /* 내용에 따라 가로 길이 조절 */
  max-width: 70vw; /* 최대 가로 길이 */
  box-sizing: border-box;
  padding-right: 5vw;
  padding-left: 5vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  flex-shrink: 0;
  border: 3px solid var(--ff, #fff);
  p {
    color: var(--ff, #fff);
    font-family: "Pretendard Variable";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0;
    margin-top: 0.5vh;
  }
`;
export const Information = styled.div`
  position: absolute;
  bottom: -2vh;
  color: var(--, #2b2b2b);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 3vw;
  margin-top: 5vh;
  #copyPathBtn {
    width: 11.1875rem;
    height: 4.8125rem;
    flex-shrink: 0;
    border-radius: 2.5rem;
    background: linear-gradient(0deg, #adadad 0%, #ebebeb 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
  }
  #layFlowerBtn {
    width: 11.1875rem;
    height: 4.8125rem;
    flex-shrink: 0;
    border-radius: 2.5rem;
    background: linear-gradient(0deg, #adadad 0%, #ebebeb 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
  }
  #btnp {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }
`;
export const BannerBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10vh;
  width: 100vw;
  height: 70vh;
  background: url(${process.env.PUBLIC_URL}/img/memorialHallImg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
export const BannerContent = styled.div`
  color: var(--ff, #fff);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin: 0;
  p {
    color: #ffda57;
    text-align: center;
    font-family: "Nanum BuJangNimNunCiCe";
    font-size: 6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
`;
export const WhereDonation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #line {
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;
export const WhereDonationContent = styled.div`
  margin-top: 5vh;
  margin-bottom: 10vh;
  height: 30vh;
  width: 25vw;
  border-radius: 1.875rem;
  background: var(--y, linear-gradient(180deg, #fff9e4 0%, #ffda57 100%));
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.25),
    5px 5px 10px 0px rgba(0, 0, 0, 0.25) inset;
`;
export const MemorialMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  background: url(${process.env.PUBLIC_URL}/img/MemorialMessage.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 10vh;
    margin-bottom: 0;
  }
`;
export const MemorialMessageContents = styled.div`
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 2rem;
  gap: 3vw;
  flex-direction: row;

  &.animated {
    opacity: 0; // 초기 상태
    transform: translateY(20px); // 초기 상태
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeInUp} 0.6s ease-out; // 애니메이션 적용
  }
`;
export const MemorialMessageContent = styled.div`
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 2rem;
  flex-direction: column;
  width: 20vw;
  height: 45vh;
  border-radius: 1.875rem;
  background: linear-gradient(0deg, #ebebeb 0%, #fff 48%);
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.25),
    5px 5px 10px 0px rgba(0, 0, 0, 0.25) inset;
`;

export const MMCProfile = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
`;
export const MMC1 = styled.div`
  margin-right: 1rem;
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
`;
export const MMC2 = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const MMCContent = styled.div`
  margin-top: 2rem;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem; /* 160.714% */
  letter-spacing: -0.08rem;
`;
export const MemorialMessages2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5vh;
`;
export const MemorialMessage2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 5vh;
  width: 100vw;
  height: 200vh;
  background: #fff;
`;
export const MemorialMessage2Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;
export const MemorialMessage2Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const MM1 = styled.div``;
export const MM2 = styled.div`
  box-sizing: border-box;
  width: 47rem;
  margin-top: 0.8rem;
  textarea {
    resize: none;
    margin-left: 1rem;
    background: none;
    overflow: hidden; /* 스크롤바 숨기기 */
    width: 100%;
    border: 0;
    border-bottom: 2px solid #2b2b2b;
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 300;
  }

  textarea:focus {
    outline: none;
    background: none;
  }
  textarea::placeholder {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 1.4rem;
    font-weight: 300;
    background: none;
  }
  #post {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 70px;
    margin-left: 37rem;
    flex-shrink: 0;
    border-radius: 40px;
    background: linear-gradient(0deg, #adadad 0%, #ebebeb 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 7vh;
    margin-top: 3vh;
  }
`;

export const MM3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 70px;
  margin-left: 5vw;
  flex-shrink: 0;
  border-radius: 40px;
  background: linear-gradient(0deg, #adadad 0%, #ebebeb 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const MemorialMessage2Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  width: 43rem; /* 최대 가로 길이 */
  padding-left: 1vw;
  padding-right: 1vw;
  box-sizing: border-box;
  height: auto;
  max-height: 40vh;
  padding: 3rem;
  border-radius: 3.125rem;
  background: linear-gradient(0deg, #ebebeb 0%, #fff 48%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const MM2Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const MM4 = styled.div`
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`;
export const MM5 = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MM2Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const MM6 = styled.div`
  width: 35rem;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 178.571% */
  letter-spacing: -0.035rem;
  margin-left: 0.7rem;
`;
export const MM7 = styled.div`
  hr {
    width: 35rem;
    height: 0.05em;
    background: #adadad;
    margin: 0;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
`;
export const MM8 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  p {
    width: 2rem;
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 0.5vw;
  }
`;

export const MM8Content = styled.div`
  img {
    width: 1.5rem;
    height: 1.3rem;
  }
  button {
    margin-left: 0.5rem;
    width: 3.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;
    background: none;
    cursor: pointer;
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 0.2rem;
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
