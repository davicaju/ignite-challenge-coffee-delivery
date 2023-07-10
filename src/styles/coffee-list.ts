import { styled } from "styled-components";

export const CoffeeListContainer = styled.div`
  h1 {
    margin-bottom: 54px;
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
  }
`;
