import logoImg from '../../assets/logo.png';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <div className='app-title'>
                    <img src={logoImg} alt="dt money" />
                    <h1 >b* better have my money</h1>
                </div>
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
};