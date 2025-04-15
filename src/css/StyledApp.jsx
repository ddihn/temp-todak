import { styled } from "styled-components";

//1헤더
export const Header = styled.div`
  height: 60px;
  background: #627b00;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 7%;
`;
//1-1헤더 왼쪽토닥토닥 로고
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  a {
    text-decoration: none;
    color: inherit;
  }
  #Logo {
    width: 60px;
    height: 37px;
    margin-top: 14px;
    margin-right: 15px;
  }
  #LogoMessage {
    margin-top: 15px;
    height: 30px;
  }
  p {
    margin-top: 14px;
    color: #ffda57;
    font-family: twayair;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -1.12px;
  }
`;
//1-2헤더 오른쪽 개인정보
export const Privacy = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  justify-content: space-evenly;
  width: 300px;
  margin-top: 14px;
  margin-right: 5%;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  height: 40vh;
  background: #ffda57;
  gap: 15vw;
  justify-content: center;
`;

export const Footer1 = styled.div`
  color: #655004;
  font-family: "Pretendard Variable";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  margin-top: 10vh;
  margin-bottom: 1vh;
  p {
    margin: 0.5rem;
    margin-left: 0;
  }
  img {
    margin-right: 0.3rem;
  }
  #Logo {
    width: 60px;
    height: 37px;
    margin-top: 14px;
    margin-right: 15px;
  }
  #LogoMessage {
    margin-top: 15px;
    height: 30px;
  }
`;
export const Footer2 = styled.div`
  color: #655004;
  font-family: "Pretendard Variable";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  margin-top: 5vh;

  #ment21 {
    color: #655004;
    font-family: "Pretendard Variable";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #ment22 {
    margin-bottom: 2rem;
  }
`;
