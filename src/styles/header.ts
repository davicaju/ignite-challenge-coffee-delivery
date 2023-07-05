import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

    background-color: #EBE5F9;

    height: 38px;

    border-radius: 6px;
    padding: 8px;

    p {
        font-size: 14px;
        font-weight: 400;

        gap: 4px;
    }
}

.shoppingCart {
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: #F1E9C9;
    
    
    width: 38px;
    height: 38px;

    border-radius: 6px; 
  }

`;




