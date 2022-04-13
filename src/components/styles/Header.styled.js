import styled from 'styled-components';

export const StyledHeader = styled.header`
	padding: 1rem 0;
	margin-bottom: 0.5rem;
	box-shadow: ${({theme}) => theme.shadow};

	img {
		height: 2.8rem;
	}
`;