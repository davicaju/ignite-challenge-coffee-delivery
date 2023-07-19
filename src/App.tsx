import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";

import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
import { Success } from "./pages/Success";
import { UseShoppingProvider } from "./hooks/useShopping";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      <UseShoppingProvider>
        <Header />
        <RouterProvider router={router} />
        <GlobalStyle />
      </UseShoppingProvider>
    </div>
  );
}
