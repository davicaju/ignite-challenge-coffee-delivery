import { useState } from "react";

import {
  Minus,
  Plus,
  ShoppingCart,
  ShoppingCartSimple,
} from "@phosphor-icons/react";

import { CoffeeListContainer, CoffeeItem } from "../../styles/coffee-list";

export function CoffeeList() {
  const [value, setValue] = useState(0);
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <div className="list">
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
        <CoffeeItem>
          <img src="/assets/coffeeItem.svg" alt="" />
          <p id="type">TRADICIONAL</p>
          <p id="title">Expresso Tradicional</p>
          <p id="description">
            O tradicional café feito com água quente e grãos moídos
          </p>
          <div className="price">
            <p>
              R$ <span>9,90</span>
            </p>

            <div id="quantity">
              <Minus
                size={14}
                onClick={() => setValue((oldValue) => oldValue - 1)}
              />
              <p>{value}</p>
              <Plus
                size={14}
                onClick={() => setValue((oldValue) => oldValue + 1)}
              />
            </div>

            <div id="cart">
              <ShoppingCartSimple size={22} weight="fill" />
            </div>
          </div>
        </CoffeeItem>
      </div>
    </CoffeeListContainer>
  );
}
