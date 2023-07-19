import { ReactNode, createContext, useContext } from "react";

interface useShoppingProps {
  value: number;
}

const UseShoppingContext = createContext({} as useShoppingProps);

export const UseShoppingProvider = ({ children }: { children: ReactNode }) => {
  const value = 1;

  return (
    <UseShoppingContext.Provider value={{ value }}>
      {children}
    </UseShoppingContext.Provider>
  );
};

export const useShopping = () => {
  return useContext(UseShoppingContext);
};
