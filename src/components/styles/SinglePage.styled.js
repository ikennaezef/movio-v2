import styled from 'styled-components';

export const Button = styled.button`
	padding: 0.7rem 1rem;
	margin-bottom: 1rem;
	display: inline-block;
	color: ${({theme}) => theme.background};
	background-color: ${({theme}) => theme.accent};
	font-size: 1rem;
	font-family: inherit;
	cursor: pointer;
	border: none;
	outline: none;
	border-radius: 0.4rem;
	transition: 0.3s ease;

	&:hover {
		opacity: 0.8;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;

	@media (max-width: 650px) {
		grid-template-columns: 1fr;
	}
`;

export const PosterContainer = styled.div`
	img {
		max-width: 100%;
	}
`;

export const MovieDetails = styled.div`
	
`;