import styled from 'styled-components';

export const Movie = styled.div`
	padding: 0.2rem 0.2rem 0.5rem;
	max-width: 100%;
	border-radius: 0.4rem;
	background: ${({theme}) => theme.movieBackground};
	transition: 0.4s ease;
	cursor: pointer;
	text-align: center;

	&:hover {
		background: ${({theme}) =>theme.accent};
		color: ${({theme}) =>theme.background};
	}
`;

export const PosterContainer = styled.div`
	max-width: 100%;
	border-radius: 0.4rem;
	margin-bottom: 0.5rem;
	position: relative;
`;

export const Poster = styled.img`
	max-width: 100%;
	border-radius: 0.4rem;
`;

export const Bookmark = styled.span`
	border-radius: 50%;
	height: 2.5rem;
	width: 2.5rem;
	line-height: 2.5rem;
	background: ${({theme}) =>theme.movieBackground};
	position: absolute;
	bottom: 0.8rem;
	right: 0.5rem;
	color: ${({theme}) =>theme.light};

	&:hover {
		background: ${({theme}) =>theme.darkBg};
	}
`;

export const Badge = styled.span`
	padding: 0.3rem;
	border-radius: 0.5rem;
	position: absolute;
	top: 0.2rem;
	right: 0.2rem;
	background: ${({theme, highlyRated}) => highlyRated ? theme.badgeBlue : theme.badgeRed };
	font-size: 0.8rem;
`;

export const MovieName = styled.h2`
	font-size: 1.2rem;
	margin-bottom: 0.5rem;
`;

export const Type = styled.h4`
	text-transform: capitalize;
	font-weight: 300;
	font-size: 1rem;
	margin-bottom: 0.3rem;
`;

export const Date = styled.p`
	font-size: 0.9rem;
`;