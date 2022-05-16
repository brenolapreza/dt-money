import { Container } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionContext } from "../../assets/TransactionContext";

export default function Summary() {
  const transaction = useContext(TransactionContext);

  console.log("Transaction no Summary", transaction);

  return (
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Entradas" />
          </header>
          <strong>R$1000,00</strong>
        </div>
        <div>
          <header>
            <p>Entradas</p>
            <img src={outcomeImg} alt="Entradas" />
          </header>
          <strong>R$1000,00</strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Entradas</p>
            <img src={totalImg} alt="Entradas" />
          </header>
          <strong>R$1000,00</strong>
        </div>
      </Container>
    </>
  );
}