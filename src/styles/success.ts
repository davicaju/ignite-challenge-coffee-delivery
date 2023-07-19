import { styled } from "styled-components";

export const SuccessContainer = styled.div`
  margin-top: 112px;

  h1 {
    font-family: "Baloo 2";
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: #c47f17;
  }

  p {
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 270px;
  width: 526px;

  padding: 40px;

  margin-top: 40px;

  border-radius: 6px 36px;
  border: 1px solid black;

  &::before {
    border: 1px solid red;
  }

  p {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: #574f4d;

    span {
      font-weight: 700;
    }
  }
`;
