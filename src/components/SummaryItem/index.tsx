import { Minus, Plus } from "@phosphor-icons/react";
import { SummaryItemContainer } from "../../styles/summary-item";
import { ItemCart, useShopCart } from "../../hooks/useShopCart";

interface SummaryItemProps {
  coffee: ItemCart;
}

export function SummaryItem({ coffee }: SummaryItemProps) {
  const {
    handleRemoveItemFromCart,
    handleIncreaseItemQuantity,
    handleDecreaseItemQuantity,
  } = useShopCart();

  return (
    <>
      <SummaryItemContainer key={coffee.id}>
        <div style={{ display: "flex" }}>
          <img src="/assets/coffeeItem.svg" width={64} height={64} alt="" />
          <div className="coffee-data">
            <p>{coffee.name}</p>
            <div className="add-remover">
              <div id="quantity">
                <Minus
                  size={14}
                  onClick={() => handleDecreaseItemQuantity(coffee)}
                />
                <p>{coffee.quantity}</p>
                <Plus
                  size={14}
                  onClick={() => handleIncreaseItemQuantity(coffee)}
                />
              </div>
              <p id="remove" onClick={() => handleRemoveItemFromCart(coffee)}>
                REMOVER
              </p>
            </div>
          </div>
        </div>
        <p id="price">R$ 9,90</p>
      </SummaryItemContainer>
      <div
        id="line"
        style={{
          width: "366px",
          height: "1px",
          backgroundColor: "#E6E5E5",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      ></div>
    </>
  );
}
