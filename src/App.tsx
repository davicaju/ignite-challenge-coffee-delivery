import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

import { Checkout } from "./pages/Checkout";
import { GlobalStyle } from "./styles/global";

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
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <GlobalStyle />
    </div>
  );
}
