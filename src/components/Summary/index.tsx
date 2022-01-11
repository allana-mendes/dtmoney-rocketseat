import { useContext } from 'react';
import incomeImg from '../../assets/income.png';
import outcomeImg from '../../assets/outcome.png';
import totalImg from '../../assets/total.png';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

export function Summary() {
    const transactions = useContext(TransactionsContext);

    console.log(transactions)
    
    return (
        <Container>
            <div>
                <header>
                    <span>Entrada</span>
                    <img src={incomeImg} alt='Entradas' />
                </header>
                <strong>R$ 1.000,00</strong>
            </div>
            <div>
                <header>
                    <span>Saídas</span>
                    <img src={outcomeImg} alt='Saídas' />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className='highlight-bg'>
                <header>
                    <span>Total</span>
                    <img src={totalImg} alt='Total' />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}