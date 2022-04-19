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

	svg {
		margin-right: 0.2rem;
	}

	&:hover {
		transform: scale(0.98);
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
		border-radius: 0.4rem;
	}
`;

export const MovieDetails = styled.div`
	
`;

export const MovieName = styled.h1`
	font-size: 2rem;
	margin-bottom: 0.4rem;
`;

export const Text = styled.p`
	font-size: 1rem;
	margin-bottom: 0.3rem;	
`;

export const FadedText = styled(Text)`
	color: ${({theme}) => theme.faded};
	margin-bottom: 0.3rem;
`;

export const Tagline = styled(Text)`
	font-style: italic;
	margin-bottom: 1rem;
`;

export const Plot = styled(Text)`
	line-height: 1.5;
	margin: 1.5rem 0;
`;

export const Rating = styled.span`
	display: inline-block;
	font-size: 1rem;
	color: ${({theme, highlyRated}) => highlyRated ? theme.badgeBlue : theme.badgeRed};
`;

export const SimilarLink = styled(FadedText)`
	cursor: pointer;	

	&:hover {
		color: ${({theme}) => theme.accent};
	}
`;

export const Pill = styled.span`
	display: inline-block;
	padding: 0.5rem;
	background-color: ${({theme}) => theme.darkBg};
	margin: 0 0.5rem 0.5rem 0;
	border-radius: 0.4rem;
	font-size: 0.9rem;
`;

export const ButtonGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin-top: 1rem;

	@media (max-width: 376px) {
		button, a {
			width: 100%;
		}
	}
`;

export const BookMarkBtn = styled(Button)`
	background: transparent;
	border: 1px solid ${({theme}) => theme.accent};
	color: ${({theme}) => theme.accent};
	margin-right: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TrailerBtn = styled(Button)`
	background-color: ${({theme}) => theme.youTube};
	color: ${({theme}) => theme.light};
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
`;