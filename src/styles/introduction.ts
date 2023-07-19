import { styled } from "styled-components";

export const IntroductionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 544px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: #272221;
  }

  p {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
    color: #403937;

    margin-top: 16px;

    img {
      background-color: red;
    }
  }
`;

export const ItemsContent = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;

  width: 567px;

  margin-top: 66px;

  p {
    display: flex;
    align-items: center;

    color: #574f4d;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;
      border-radius: 999px;

      margin-right: 12px;

      svg {
        border-radius: 999px;
        color: white;
      }
    }
  }
`;
