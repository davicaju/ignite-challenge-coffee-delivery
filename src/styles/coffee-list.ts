import { styled } from "styled-components";

export const CoffeeListContainer = styled.div`
  h1 {
    margin-bottom: 54px;
  }

  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 60px;
  }
`;

export const CoffeeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  background-color: #f3f2f2;

  width: 256px;
  height: 310px;

  border-radius: 6px 36px;

  padding: 20px;

  img {
    margin-top: -80px;
  }

  #type {
    color: #c47f17;
    background-color: #f1e9c9;

    margin-top: 12px;
    margin-bottom: 16px;

    margin-bottom: 20px;

    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    border-radius: 100px;
  }

  #title {
    color: #403937;
    font-family: Baloo 2;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    margin-bottom: 8px;
  }

  #description {
    color: #8d8686;

    text-align: center;

    margin-bottom: 33px;
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 208px;

    p {
      color: #574f4d;
      text-align: right;
      font-family: "Roboto";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      span {
        font-size: 20px;
        font-weight: 900;
      }
    }

    #quantity {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 72px;
      height: 38px;
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

    #cart {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 38px;
      height: 38px;

      border-radius: 6px;

      background-color: #4b2995;

      cursor: pointer;

      svg {
        color: white;
        fill: white;
      }
    }
  }
`;
