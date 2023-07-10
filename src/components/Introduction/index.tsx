import {
  IntroductionContainer,
  LeftContent,
  ItemsContent,
} from "../../styles/introduction";

import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";

export function Introduction() {
  return (
    <IntroductionContainer>
      <LeftContent>
        <h1>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />
          qualquer hora
        </p>

        <ItemsContent>
          <div>
            <p>
              <span style={{ backgroundColor: "#C47F17" }}>
                <ShoppingCart size={18} />
              </span>
              Compra simples e segura
            </p>

            <p>
              <span style={{ backgroundColor: "#DBAC2C" }}>
                <Timer size={18} />
              </span>
              Entrega rápida e rastreada
            </p>
          </div>
          <div>
            <p>
              <span style={{ backgroundColor: "#574F4D" }}>
                <Package size={18} />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span style={{ backgroundColor: "#8047F8" }}>
                <Coffee size={18} />
              </span>
              O café chega fresquinho até você
            </p>
          </div>
        </ItemsContent>
      </LeftContent>

      <div>
        <img src="/assets/coffee-image.svg" alt="" />
      </div>
    </IntroductionContainer>
  );
}
