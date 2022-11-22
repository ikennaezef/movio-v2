import styled from "styled-components";

export const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	padding: 6rem 1rem 5rem;

	& > h1 {
		font-size: 1.8rem;
		display: flex;
		align-items: center;
		margin-bottom: 0.7rem;

		svg {
			color: ${({ theme }) => theme.accent};
			margin-right: 0.5rem;
		}
	}

	& > p {
		font-size: 1.1rem;
		margin-bottom: 2rem;
	}

	@media (max-width: 769px) {
		padding: 6rem 1rem 5rem;
	}
`;
