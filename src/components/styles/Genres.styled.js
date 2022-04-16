import styled from 'styled-components';

export const GenresContainer = styled.div`
	margin-bottom: 2rem;
`;

export const GenreTablet = styled.span`
	display: inline-block;
	border-radius: 0.5rem;
	padding: 0.5rem;
	font-size: 0.9rem;
	background: ${({theme, active}) => active ? theme.darkBg : theme.movieBackground};
	color: ${({theme, active}) => active ? theme.accent : theme.light};
	margin-right: 0.5rem;
	margin-bottom: 0.5rem;
	cursor: pointer;
	transition: 0.3s ease;

	&:hover {
		color: ${({theme}) => theme.accent};
	}
`;