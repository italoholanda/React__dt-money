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
		--blue: #5429CC;
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

	p {
		color: var(---text-body);
	}

	body {
		background: var(---background);
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		color: var(---text-title);
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
