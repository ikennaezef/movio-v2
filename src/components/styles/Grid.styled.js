import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4,1fr);
	grid-gap: 1rem;
	padding-bottom: 1rem;

	@media (max-width: 769px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 500px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;