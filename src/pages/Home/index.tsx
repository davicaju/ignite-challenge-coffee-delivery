import { CoffeeList } from "../../components/CoffeeList";
import { Header } from "../../components/Header";
import { Introduction } from "../../components/Introduction";

export function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <CoffeeList />
    </>
  );
}
