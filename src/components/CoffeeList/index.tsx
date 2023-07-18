import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { CoffeeListContainer } from "../../styles/coffee-list";

import expresso from "/assets/coffeeItem.svg";

import { CoffeeItem } from "../CoffeeItem";

type CoffeeItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
};

export function CoffeeList() {
  const [coffees] = useState<CoffeeItem[]>([
    {
      id: uuidv4(),
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      image: expresso,
      price: 9.99,
      tags: ["tradicional"],
    },
    {
      id: uuidv4(),
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      image: expresso,
      price: 9.9,
      tags: ["tradicional"],
    },
    {
      id: uuidv4(),
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      image: expresso,
      price: 9.9,
      tags: ["tradicional"],
    },
    {
      id: uuidv4(),
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      image: expresso,
      price: 9.9,
      tags: ["tradicional"],
    },
    {
      id: uuidv4(),
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      image: expresso,
      price: 9.9,
      tags: ["tradicional"],
    },
    {
      id: uuidv4(),
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      image: expresso,
      price: 9.9,
      tags: ["tradicional"],
    },
    {
      id: uuidv4(),
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      image: expresso,
      price: 9.9,
      tags: ["tradicional"],
    },
    {
      id: uuidv4(),
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      image: expresso,
      price: 9.9,
      tags: ["tradicional"],
    },
  ]);

  console.log(coffees);

  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <div className="list">
        {coffees.map((coffee) => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </CoffeeListContainer>
  );
}
