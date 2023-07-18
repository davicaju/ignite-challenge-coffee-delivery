import { Minus, Plus } from "@phosphor-icons/react";
import { SummaryItemContainer } from "../../styles/summary-item";

export function SummaryItem() {
  return (
    <>
      <SummaryItemContainer>
        <div style={{ display: "flex" }}>
          <img src="/assets/coffeeItem.svg" width={64} height={64} alt="" />
          <div className="coffee-data">
            <p>Expresso Tradicional</p>
            <div className="add-remover">
              <div id="quantity">
                <Minus size={14} />
                <p>0</p>
                <Plus size={14} />
              </div>
              <p id="remove">REMOVER</p>
            </div>
          </div>
        </div>
        <p id="price">R$ 9,90</p>
      </SummaryItemContainer>
      <div
        id="line"
        style={{
          width: "366px",
          height: "1px",
          backgroundColor: "#E6E5E5",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      ></div>
    </>
  );
}
