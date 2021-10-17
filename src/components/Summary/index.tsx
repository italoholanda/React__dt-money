import React from "react";
import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt={"Entradas"} />
        </header>
        <strong>R$ 2000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outComeImg} alt={"Saídas"} />
        </header>
        <strong>R$ 600,00</strong>
      </div>

      <div className="hightlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt={"Total"} />
        </header>
        <strong>R$ 1400,00</strong>
      </div>
    </Container>
  );
}
