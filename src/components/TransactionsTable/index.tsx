import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="title">
                            Desenvolvimento de website
                        </td>
                        <td className="deposit">
                            R$ 12.000,00
                        </td>
                        <td>
                            Freelancer
                        </td>
                        <td>
                            20/02/2021
                        </td>
                    </tr>
                    <tr>
                        <td className="title">
                            Aluguel
                        </td>
                        <td className="withdraw">
                            - R$ 450,00
                        </td>
                        <td>
                            Casa
                        </td>
                        <td>
                            20/02/2021
                        </td>
                    </tr>
                    <tr>
                        <td className="title">
                            Desenvolvimento de website
                        </td>
                        <td>
                            R$ 12.000,00
                        </td>
                        <td>
                            Freelancer
                        </td>
                        <td>
                            20/02/2021
                        </td>
                    </tr>
                    <tr>
                        <td className="title">
                            Desenvolvimento de website
                        </td>
                        <td>
                            R$ 12.000,00
                        </td>
                        <td>
                            Freelancer
                        </td>
                        <td>
                            20/02/2021
                        </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}