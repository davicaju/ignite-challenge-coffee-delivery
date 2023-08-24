import { useState, useCallback } from "react";
import { CoffeeContainer } from "../../styles/coffee-item";

import { useShopCart } from "../../hooks/useShopCart";

import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

type CoffeeItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
};

interface CoffeeItemProps {
  coffee: CoffeeItem;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const [quantity, setQuantity] = useState(1);

  const { handleAddItemInCart } = useShopCart();

  const handleAddCoffeeInCart = useCallback(() => {
    console.log(quantity);
    handleAddItemInCart({ id: coffee.id, name: coffee.name }, quantity);

    console.log(quantity);

    setQuantity(1);
  }, [quantity]);

  return (
    <CoffeeContainer>
      <img src={coffee.image} alt="" />
      {coffee.tags.map((tag) => (
        <p id="type">{tag.toUpperCase()}</p>
      ))}
      <p id="title">{coffee.name}</p>
      <p id="description">{coffee.description}</p>
      <div className="price">
        <p>
          R$ <span>{coffee.price}</span>
        </p>

        <div id="quantity">
          <Minus
            size={14}
            onClick={() =>
              setQuantity((oldValue) =>
                oldValue > 1 ? oldValue - 1 : oldValue
              )
            }
          />
          <p>{quantity}</p>
          <Plus
            size={14}
            onClick={() => setQuantity((oldValue) => oldValue + 1)}
          />
        </div>

        <div id="cart" onClick={() => handleAddCoffeeInCart()}>
          <ShoppingCartSimple size={22} weight="fill" />
        </div>
      </div>
    </CoffeeContainer>
  );
}
