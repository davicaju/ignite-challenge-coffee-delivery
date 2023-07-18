export function Success() {
  return (
    <div>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div style={{ display: "flex" }}>
        <div>
          <div>
            <p>Entrega em Rua João Daniel Martinelli, 102</p>
            <p>Farrapos - Porto Alegre, RS</p>
          </div>
          <div>
            <p> Previsão de entrega</p>
            <p>20 min - 30 min </p>
          </div>
          <div>
            <p>Pagamento na entrega</p>
            <p>Cartão de Crédito</p>
          </div>
        </div>
        <div>
          <img src="/assets/motocycle.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
