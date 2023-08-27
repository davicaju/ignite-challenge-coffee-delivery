import { styled } from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;

  h2 {
    font-family: "Baloo 2";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    color: #403937;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 650px;

  gap: 12px;

  margin-right: 32px;

  .input-container {
    background-color: #f3f2f2;
    padding: 40px;

    border-radius: 6px;

    .input-group {
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      flex-wrap: wrap;

      gap: 1rem;
    }
  }

  .title-container {
    display: flex;

    .title {
      font-family: "Roboto";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    .sub-title {
      font-family: "Roboto";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      color: #574f4d;

      margin-bottom: 32px;
    }

    svg {
      margin-right: 8px;
    }
  }

  .pay-method-container {
    background-color: #f3f2f2;

    padding: 40px;

    border-radius: 6px;

    .pay-method {
      display: flex;

      gap: 8px;

      .active {
        background-color: #ebe5f9;
        border: 1px solid #8047f8;
      }

      div {
        display: flex;
        align-items: center;

        padding: 1rem;
        background-color: #e6e5e5;

        width: 178px;
        height: 51px;

        border-radius: 6px;

        font-family: "Roboto";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        text-transform: uppercase;

        cursor: pointer;

        svg {
          margin-right: 12px;
          color: #8047f8;
        }

        &:hover {
          background-color: #d7d5d5;
        }
      }
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  border-radius: 6px;

  width: 448px;

  .summary {
    height: 498px;
    border-radius: 6px 44px;
    padding: 40px;
    background-color: #f3f2f2;

    .cartItems {
      overflow: auto;
      overflow-x: hidden;
      max-height: 200px;

      margin-bottom: 40px;
    }

    .total-order {
      display: flex;
      justify-content: space-between;

      font-family: "Roboto";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }

    .order {
      display: flex;
      justify-content: space-between;

      margin-bottom: 15px;

      p {
        font-family: "Roboto";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
      }
    }

    button {
      background-color: #dbac2c;
      color: white;

      width: 368px;
      height: 46px;

      border: 0;

      margin-top: 24px;

      font-family: "Roboto";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;

      border-radius: 6px;

      cursor: pointer;

      &:hover {
        background-color: #c47f17;
      }
    }
  }
`;
