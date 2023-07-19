import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 8px;

  .city {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ebe5f9;

    height: 38px;

    border-radius: 6px;
    padding: 8px;

    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: #4b2995;
  }

  .shoppingCart {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #f1e9c9;

    width: 38px;
    height: 38px;

    border-radius: 6px;
  }
`;
