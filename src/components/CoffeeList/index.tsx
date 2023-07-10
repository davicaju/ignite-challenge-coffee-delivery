import { useState } from "react";

import { ShoppingCart } from "@phosphor-icons/react";

import { CoffeeListContainer, CoffeeItem } from "../../styles/coffee-list";

export function CoffeeList() {
  const [value, setValue] = useState(0);
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>

      <CoffeeItem>
        <img src="/assets/coffeeItem.svg" alt="" />
        <p id="type">TRADICIONAL</p>
        <p id="title">Expresso Tradicional</p>
        <p id="description">
          O tradicional café feito com água quente e grãos moídos
        </p>
        <div className="price">
          <p> R$ 9,90</p>
          <span onClick={() => setValue((oldValue) => oldValue - 1)}>-</span>
          <p>{value}</p>
          <span onClick={() => setValue((oldValue) => oldValue + 1)}>+</span>
          <ShoppingCart />
        </div>
      </CoffeeItem>
    </CoffeeListContainer>
  );
}
