import { ReactNode, createContext, useContext, useState } from "react";

type Item = {
  id: number;
  name: string;
};

interface ItemCart extends Item {
  quantity: number;
}

interface useShopCartProps {
  value: number;
}

const UseShopCartContext = createContext({} as useShopCartProps);

export const UseShopCartProvider = ({ children }: { children: ReactNode }) => {
  const value = 1;

  const [cartItems, setCartItems] = useState<ItemCart[]>([]);

  const itemExistOnCart = (item: Item) => {
    const isFound = cartItems.some((itemCart) => {
      if (itemCart.id === item.id) {
        return true;
      }
      return false;
    });

    return isFound;
  };

  const handleAddItemInCart = (item: Item, quantity: number) => {
    const isItemInCart = itemExistOnCart(item);

    if (!isItemInCart) {
      const newItem = {
        ...item,
        quantity: 0,
      };

      setCartItems((oldItem) => [...oldItem, newItem]);
    } else {
      const updateQuantityOfItemInCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...item, quantity: cartItem.quantity + quantity }
          : cartItem
      );

      setCartItems(updateQuantityOfItemInCart);
    }
  };

  return (
    <UseShopCartContext.Provider value={{ value }}>
      {children}
    </UseShopCartContext.Provider>
  );
};

export const useShopping = () => {
  return useContext(UseShopCartContext);
};
