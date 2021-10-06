import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}
		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	:root {
		--background: #E5E5E5;
		--blue: ##5429CC;
		--blue-light: #6933ff;
		--green: #33CC95;
		--red: #E62E4D;
		--text-title: #363F5F;
		--text-body: #969CB3;
	}

	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	h1, h2, h3, h4 {
		color: var(---text-title);
	}

	p {
		color: var(---text-body);
	}

	body {
		background: var(---background);
		-webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
