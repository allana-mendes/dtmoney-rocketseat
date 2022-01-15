import logoImg from "../../assets/logo.png";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export function Header({onOpenTransactionModal}: HeaderProps) {
  

  return (
    <Container>
      <Content>
        <div className="app-title">
          <img src={logoImg} alt="dt money" />
          <h1>b* better have my money</h1>
        </div>
        <button type="button" onClick={onOpenTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
