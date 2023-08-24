import { ReactNode, createContext, useContext, useState } from "react";

type Item = {
  id: string;
  name: string;
};

export interface ItemCart extends Item {
  quantity: number;
}

interface useShopCartProps {
  cartItems: ItemCart[];
  handleAddItemInCart: (item: Item, quantity: number) => void;
  handleIncreaseItemQuantity: (item: ItemCart) => void;
  handleDecreaseItemQuantity: (item: ItemCart) => void;
  handleRemoveItemFromCart: (item: ItemCart) => void;
}

const UseShopCartContext = createContext({} as useShopCartProps);

export const UseShopCartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ItemCart[]>([]);

  console.log(cartItems);

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
        quantity: quantity,
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

  const handleIncreaseItemQuantity = (item: ItemCart) => {
    const updateNumberOfItemInCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...item, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    setCartItems(updateNumberOfItemInCart);
  };

  const handleDecreaseItemQuantity = (item: ItemCart) => {
    const updateNumberOfItemInCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...item, quantity: cartItem.quantity - 1 }
        : cartItem
    );

    setCartItems(updateNumberOfItemInCart);
  };

  const handleRemoveItemFromCart = (item: ItemCart) => {
    const updateNumberOfItemInCart = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );

    setCartItems(updateNumberOfItemInCart);
  };

  return (
    <UseShopCartContext.Provider
      value={{
        cartItems,
        handleAddItemInCart,
        handleIncreaseItemQuantity,
        handleDecreaseItemQuantity,
        handleRemoveItemFromCart,
      }}
    >
      {children}
    </UseShopCartContext.Provider>
  );
};

export const useShopCart = () => {
  return useContext(UseShopCartContext);
};
