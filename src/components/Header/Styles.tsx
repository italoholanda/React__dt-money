import styled from "styled-components";

export const Container = styled.header`
	width: 100vw;
	background: var(--blue);
`

export const Content = styled.div`
	margin: 0 auto;
	max-width: 980px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 1rem 10rem;
	& button {
		font-size: 1rem;
		font-weight: bold;
		color: #fff;
		background: var(--blue-light);
		border-color: transparent;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		transition: filter 0.4s;
	}
	& button:hover{
		filter: brightness(0.9);
	}
`
