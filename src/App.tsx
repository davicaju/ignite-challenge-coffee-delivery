import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";

import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
import { Success } from "./pages/Success";
import { UseShopCartProvider } from "./hooks/useShopCart";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ]);

  return (
    <div>
      <UseShopCartProvider>
        <RouterProvider router={router} />
        <GlobalStyle />
      </UseShopCartProvider>
    </div>
  );
}
