import logoImage from "../../assets/logo.svg";
import { Container, Content } from "./style";

interface HeaderProps {
  onTransactionNewModal: () => void;
}

export function Header({ onTransactionNewModal }: HeaderProps) {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImage} alt="Logo dt money" />
          <button type="submit" onClick={onTransactionNewModal}>
            Nova Transação
          </button>
        </Content>
      </Container>
    </>
  );
}
