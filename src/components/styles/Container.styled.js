import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	padding: 1rem; 

	& > h1 {
		margin: 6rem 0 0.7rem;

		svg {
			color: ${({theme}) => theme.accent};
		}
	}

	& > p {
		font-size: 1.1rem;
		margin-bottom: 2rem;
	}

	@media (max-width: 769px) {
		padding: 0 1rem;
	}
`;