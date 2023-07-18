import { CoffeeContainer } from "../../styles/coffee-item";

import { Price } from "../Price";

type CoffeeItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
};

interface CoffeeItemProps {
  coffee: CoffeeItem;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  return (
    <CoffeeContainer>
      <img src={coffee.image} alt="" />
      {coffee.tags.map((tag) => (
        <p id="type">{tag.toUpperCase()}</p>
      ))}
      <p id="title">{coffee.name}</p>
      <p id="description">{coffee.description}</p>
      <Price price={coffee.price} />
    </CoffeeContainer>
  );
}
