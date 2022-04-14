import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;

	h1 {
		margin: 1rem 0 2rem;

		svg {
			color: ${({theme}) => theme.accent};
		}
	}

	@media (max-width: 769px) {
		padding: 0 1rem;
	}
`;