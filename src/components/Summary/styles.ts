import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin-top: -5rem;
	& div {
		background: #fff;
		border-radius: 0.25rem;
		padding: 1rem;
		color: var(--text-title);
		// tmp
		box-shadow: 0 4px 12px 0 rgba(0,0,0,0.1);
	}
	& header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	& .hightlight {
		background: var(--green);
		color: #fff;
	}
	& strong {
		display: block;
		margin-top: 1rem;
		font-size: 2rem;
		font-weight: normal;
		line-height: 3rem;
	}
`
