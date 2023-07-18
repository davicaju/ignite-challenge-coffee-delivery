import { useState } from "react";

import { Input } from "../../components/Input";

import {
  LeftContent,
  CheckoutContainer,
  RightContent,
} from "../../styles/checkout";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
} from "@phosphor-icons/react";

import { SummaryItem } from "../../components/SummaryItem";

import { Link } from "react-router-dom";

export function Checkout() {
  const [payMethod, setPayMethod] = useState<"" | "cred" | "deb" | "money">("");

  return (
    <CheckoutContainer>
      <LeftContent>
        <h2>Complete seu pedido</h2>
        <div className="input-container">
          <div className="title-container">
            <MapPinLine color="#c47f17" size={22} />

            <div>
              <p className="title">Endereço de Entrega</p>
              <p className="sub-title">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>

          <div className="input-group">
            <Input type="text" placeholder="CEP" style={{ width: "200px" }} />
            <Input type="text" placeholder="Rua" style={{ width: "100%" }} />

            <Input type="text" placeholder="Número" style={{ width: "px" }} />
            <Input
              type="text"
              placeholder="Complemento"
              style={{ width: "354px" }}
            />

            <Input
              type="text"
              placeholder="Bairro"
              style={{ width: "200px" }}
            />
            <Input
              type="text"
              placeholder="Cidade"
              style={{ width: "260px" }}
            />
            <Input type="text" placeholder="UF" style={{ width: "66px" }} />
          </div>
        </div>
        <div className="pay-method-container">
          <div className="title-container">
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <p className="title">Pagamento</p>
              <p className="sub-title">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className="pay-method">
            <div
              className={payMethod === "cred" ? "active" : ""}
              onClick={() => {
                if (payMethod === "cred") {
                  setPayMethod("");
                } else {
                  setPayMethod("cred");
                }
              }}
            >
              <CreditCard size={16} /> CARTÃO DE CRÉDITO
            </div>
            <div
              className={payMethod === "deb" ? "active" : ""}
              onClick={() => {
                if (payMethod === "deb") {
                  setPayMethod("");
                } else {
                  setPayMethod("deb");
                }
              }}
            >
              <Bank size={16} /> CARTÃO DE DÉBITO
            </div>
            <div
              className={payMethod === "money" ? "active" : ""}
              onClick={() => {
                if (payMethod === "money") {
                  setPayMethod("");
                } else {
                  setPayMethod("money");
                }
              }}
            >
              <Money size={16} /> DINHEIRO
            </div>
          </div>
        </div>
      </LeftContent>

      <RightContent>
        <h2>Cafés selecionados</h2>
        <div className="summary">
          <SummaryItem />
          <SummaryItem />
          <div className="summary-order">
            <div className="order">
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div className="order">
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="total-order">
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>

            <Link to="/success">
              <button>CONFIRMAR PEDIDO</button>
            </Link>
          </div>
        </div>
      </RightContent>
    </CheckoutContainer>
  );
}
