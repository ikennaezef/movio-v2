import styled from 'styled-components';

export const StyledHeader = styled.header`
	padding: 1rem 0;
	margin-bottom: 0.5rem;
	box-shadow: ${({theme}) => theme.shadow};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	background: ${({theme}) => theme.background};

	img {
		height: 2.8rem;
	}
`;