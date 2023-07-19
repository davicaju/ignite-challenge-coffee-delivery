import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { OrderInfoContainer, SuccessContainer } from "../../styles/success";

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <OrderInfoContainer>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8047F8",
                borderRadius: "1000px",
                width: "32px",
                height: "32px",
                marginRight: "12px",
              }}
            >
              <MapPin size={24} weight="fill" color="white" />
            </div>
            <div>
              <p>
                Entrega em <span> Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#DBAC2C",
                borderRadius: "1000px",
                width: "32px",
                height: "32px",
                marginRight: "12px",
              }}
            >
              <Timer size={24} weight="fill" color="white" />
            </div>
            <div>
              <p> Previsão de entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#C47F17",
                borderRadius: "1000px",
                width: "32px",
                height: "32px",
                marginRight: "12px",
              }}
            >
              <CurrencyDollar size={24} color="white" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <span>Cartão de Crédito</span>
              </p>
            </div>
          </div>
        </OrderInfoContainer>
        <div>
          <img src="/assets/motocycle.svg" alt="" />
        </div>
      </div>
    </SuccessContainer>
  );
}
