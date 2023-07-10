import { CoffeeList } from "./components/CoffeeList";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div>
      <Header />
      <Introduction />

      <GlobalStyle />

      <CoffeeList />
    </div>
  );
}
