import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { useState } from "react";

interface PriceProps {
  price: number;
}

export function Price({ price }: PriceProps) {
  const [value, setValue] = useState(0);
  return (
    <div className="price">
      <p>
        R$ <span>{price}</span>
      </p>

      <div id="quantity">
        <Minus size={14} onClick={() => setValue((oldValue) => oldValue - 1)} />
        <p>{value}</p>
        <Plus size={14} onClick={() => setValue((oldValue) => oldValue + 1)} />
      </div>

      <div id="cart">
        <ShoppingCartSimple size={22} weight="fill" />
      </div>
    </div>
  );
}
