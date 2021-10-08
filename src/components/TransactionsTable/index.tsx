import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
	useEffect(() => {
		fetch('http://localhost:3000/api/transactions')
		.then(response => response.json())
		.then(data => console.log("Teste\n", data));
	}, [])
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Comprei uma garrafa dágua</td>
						<td className="withdraw">R$ 5,00</td>
						<td>Alimentos</td>
						<td>17/06/2021</td>
					</tr>
					<tr>
						<td>Comprei uma garrafa dágua</td>
						<td className="withdraw">R$ 5,00</td>
						<td>Alimentos</td>
						<td>17/06/2021</td>
					</tr>
					<tr>
						<td>Comprei uma garrafa dágua</td>
						<td className="withdraw">R$ 5,00</td>
						<td>Alimentos</td>
						<td>17/06/2021</td>
					</tr>
					<tr>
						<td>Vendi uma garrafa dágua</td>
						<td className="deposit">R$ 5,00</td>
						<td>Alimentos</td>
						<td>17/06/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}
