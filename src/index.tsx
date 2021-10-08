import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer } from "miragejs";

createServer({
	routes() {
		this.namespace = 'api';
		this.get('/transactions', () => {
			return [
				{
					id: 1,
					title: 'Transaction 1',
					amount: 400,
					type: 'deposit',
					categoty: 'food',
					createdAt: new Date()
				}
			]
		})
	}
})

ReactDOM.render(<App />, document.querySelector('#root'));
