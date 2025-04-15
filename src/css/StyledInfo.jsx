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

export const Info = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
`;
export const Info1 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  background: linear-gradient(
      180deg,
      rgba(153, 153, 153, 1) 0%,
      rgba(153, 153, 153, 0) 30%
    ),
    url(${process.env.PUBLIC_URL}/img/Info1.png);
  background-size: cover;
  background-repeat: no-repeat;
  img {
    width: 146px;
    height: 89px;
    flex-shrink: 0;
  }
  p {
    color: var(--ff, #fff);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    line-height: normal;
    margin: 10px;
  }
`;
export const BoldText = styled.p`
  display: inline-block;
  color: var(--ff, #fff);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Info2 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  background: url(${process.env.PUBLIC_URL}/img/Background2.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  #title {
    color: var(---, #323232);
    font-family: "Pretendard Variable";
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  #content1 {
    color: var(---, #323232);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 5px;
    margin-bottom: 30px;
    margin-top: 15px;
  }
  #content2 {
    color: var(---, #323232);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 5px;
  }
  #content3 {
    color: var(---, #323232);
    font-family: "Pretendard Variable";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: #ffda57;
  }
`;
export const BoldText2 = styled.p`
  display: inline-block;
  color: var(---, #323232);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 5px;
`;
export const Info3 = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 70vh;
  background: linear-gradient(270deg, #fff 0%, #ffda57 65%);
  #Info3Left {
    position: absolute;
    left: 0;
    height: 100%;
  }
  #Info3Right {
    position: absolute;
    right: 0;
    height: 100%;
  }
  #title {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  #content1 {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #content2 {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 40px;
  }
`;
export const BoldText3 = styled.p`
  display: inline-block;
  color: var(--, #2b2b2b);
  font-family: "Pretendard Variable";
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Info3Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Info3Content2Wrapp1 = styled.div`
  width: 152px;
  height: 152px;
  flex-shrink: 0;
  fill: rgba(50, 46, 47, 0.35);
  background: url(${process.env.PUBLIC_URL}/img/Ellipse17.svg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Info3Content2Wrapp2 = styled.div`
  width: 152px;
  height: 152px;
  flex-shrink: 0;
  fill: rgba(50, 46, 47, 0.25);
  background: url(${process.env.PUBLIC_URL}/img/Ellipse18.svg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Info3Content2Wrapp3 = styled.div`
  width: 152px;
  height: 152px;
  flex-shrink: 0;
  fill: rgba(50, 46, 47, 0.2);
  background: url(${process.env.PUBLIC_URL}/img/Ellipse19.svg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Info3Content2Wrapp4 = styled.div`
  width: 152px;
  height: 152px;
  flex-shrink: 0;
  fill: rgba(50, 46, 47, 0.15);
  background: url(${process.env.PUBLIC_URL}/img/Ellipse20.svg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Info3Content2Wrapp5 = styled.div`
  width: 152px;
  height: 152px;
  flex-shrink: 0;
  fill: rgba(50, 46, 47, 0.1);
  background: url(${process.env.PUBLIC_URL}/img/Ellipse21.svg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Info3Arrow = styled.div`
  background: url(${process.env.PUBLIC_URL}/img/Arrow.svg);
  width: 40px;
  height: 30px;
  flex-shrink: 0;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 20px;
`;
export const Info3Content2 = styled.div`
  color: var(--, #2b2b2b);
  font-family: "Pretendard Variable";
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Info4 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  background: url(${process.env.PUBLIC_URL}/img/Info4Background.png);
  background-size: cover;
  background-repeat: no-repeat;
  #title {
    color: var(--ff, #fff);
    font-family: "Pretendard Variable";
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;
export const Info4Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5vw;
`;
export const Info4Content = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 35vw;
  height: 60vh;
  flex-shrink: 0;
  border-radius: 50px;
  background: var(--ff, #fff);
  box-shadow: 7px 7px 5px 0px rgba(0, 0, 0, 0.25),
    5px 5px 7px 0px rgba(0, 0, 0, 0.25) inset;
  img {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
  }
  #contentTitle {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  #content {
    color: var(--, #2b2b2b);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }
  #boldContent {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;
export const Info5 = styled.div`
  text-align: left;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: left;
  padding-left: 10vw;
  flex-direction: column;
  width: 100vw;
  height: 70vh;
  background: #000;
  img {
    position: absolute;
    right: 10vw;
    height: 70vh;
  }
  #title {
    z-index: 2;
    color: var(--ff, #fff);
    font-family: "Pretendard Variable";
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  #content {
    z-index: 2;
    color: var(--ff, #fff);
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const BoldText4 = styled.p`
  display: inline-block;
  color: var(--ff, #fff);
  font-family: "Pretendard Variable";
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const InfoAdd = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 70vh;
  background: url(${process.env.PUBLIC_URL}/img/Info6Img.png);
  background-size: cover;
  background-repeat: no-repeat;
  #title {
    color: var(--ff, #fff);
    font-family: "Pretendard Variable";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  #content {
    color: var(--ff, #fff);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
  }
`;
export const Info6 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10vw;
  width: 100vw;
  height: 70vh;
  background: url(${process.env.PUBLIC_URL}/img/Info6Img.png);
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Info6Content = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  div {
    width: 32.5rem;
    height: 3.5rem;
    flex-shrink: 0;
    border-radius: 4.375rem;
    background: linear-gradient(0deg, #ebebeb 0%, #fff 48%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  #Info62 {
    margin-left: 10rem;
  }
  p {
    color: #6f6f6f;
    font-family: "Pretendard Variable";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0.9rem;
  }
`;
export const Info6Information = styled.div`
  margin-right: 5vw;
  #title {
    color: var(--ff, #fff);
    font-family: "Pretendard Variable";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  #content {
    color: var(--ff, #fff);
    text-align: left;
    font-family: "Pretendard Variable";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
  }
`;
export const Info7 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  height: 60vh;
  background: url(${process.env.PUBLIC_URL}/img/plantTree-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  padding-left: 10vw;
  gap: 20vw;
`;
export const Info7Content = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;

  #title {
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: nomal;
    margin: 0;
  }
  #content {
    color: #3d4c00;
    text-align: left;
    font-family: "Pretendard Variable";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
  }
`;
export const Info7Img = styled.div`
  div {
    position: relative;
    right: 10vw;
    bottom: 0;
    flex-shrink: 0;
    width: 482px;
    height: 431px;
  }
  #Img {
    width: 482px;
    height: 431px;
  }
  #Heart1 {
    position: absolute;
    z-index: 2;
    right: 8vh;
    bottom: 250px;
    width: 50px;
    height: 50px;
  }
  #Heart2 {
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 300px;
    width: 50px;
    height: 50px;
  }
  #Heart3 {
    position: absolute;
    z-index: 2;
    left: 100px;
    bottom: 200px;
    width: 50px;
    height: 50px;
  }
`;
export const Info8 = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  background: linear-gradient(180deg, #c3e985 0%, #e7e985 100%);
  #title {
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0;
  }
  #content {
    color: #3d4c00;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const BoldText5 = styled.p`
  display: inline-block;
  color: #3d4c00;
  font-family: "Pretendard Variable";
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 10px;
`;
export const Info8Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  #Info8Img3 {
    width: 382px;
    height: 331px;
    flex-shrink: 0;
  }
`;

export const Info8Arrow = styled.div`
  background: url(${process.env.PUBLIC_URL}/img/Arrow.svg);
  width: 67px;
  height: 42px;
  flex-shrink: 0;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 20px;
  margin-bottom: 10%;
`;
export const Info9 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  background: url(${process.env.PUBLIC_URL}/img/Info9Img.png);
  background-size: cover;
  background-repeat: no-repeat;
  img {
    width: 9rem;
    height: 9rem;
  }
  #title {
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0;
  }
  #content {
    color: #3d4c00;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
  }
`;
export const Info923 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 15rem;
  width: 60rem;
`;
export const Info92 = styled.div`
  position: absolute;
  top: 6rem;
  width: 46.9375rem;
  height: 3.125rem;
  flex-shrink: 0;
  background: linear-gradient(90deg, #ffda57 0%, #b59a3d 100%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const Info93 = styled.div`
  z-index: 3;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5rem;
`;
export const NavBtnWrapper1 = styled.div`
  display: flex;
  width: 11.25rem;
  height: 11.25rem;
  border-radius: 50%;
  background: rgba(255, 218, 87, 0.45);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;
//3-2 버튼 wrapping 안쪽
export const NavBtnWrapper2 = styled.div`
  display: flex;
  width: 8.6875rem;
  height: 8.75rem;
  flex-shrink: 0;
  border-radius: 50%;
  background: #ffda57;

  justify-content: center;
  align-items: center;
  p {
    color: #3d4c00;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
export const BoldText9 = styled.p`
  display: inline-block;
  color: #3d4c00;
  font-family: "Pretendard Variable";
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;
export const Info10 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  height: 60vh;
  background: url(${process.env.PUBLIC_URL}/img/Info10Img.png);
  background-size: cover;
  background-repeat: no-repeat;
  gap: 5vw;
`;
export const Info10Line1 = styled.div`
  width: 390px;
  height: 2px;
  background: #655004;
`;
export const Info10Content = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 60.001px;
    height: 37.012px;
    flex-shrink: 0;
  }
  #title {
    color: #2b2b2b;
    text-align: center;
    font-family: GyeonggiBatang;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
    margin-top: 30px;
  }
  #content {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
