import { styled } from "styled-components";

export const SummaryItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  #price {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  .coffee-data {
    display: flex;
    flex-direction: column;

    margin-left: 20px;

    p:first-child {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      margin-bottom: 8px;
    }

    .add-remover {
      display: flex;
      align-items: center;
      justify-content: center;

      #remove {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 32px;
        width: 91px;

        margin-left: 8px;

        border-radius: 6px;
        background-color: #e6e5e5;

        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;

        cursor: pointer;
      }
    }

    #quantity {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 72px;
      height: 32px;
      border-radius: 6px;
      padding: 8px;

      background-color: #e6e5e5;

      p {
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: #272221;
      }

      svg {
        color: #8047f8;
        cursor: pointer;
      }
    }
  }
`;
