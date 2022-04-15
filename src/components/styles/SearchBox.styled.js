import styled from 'styled-components';

export const SearchBox = styled.form`
	background: ${({theme}) => theme.darkBg};
	border-radius: 0.4rem;
	margin: 0.5rem 0 1rem;
	display: flex;
`;

export const Input = styled.input`
	padding: 0.5rem;
	padding-left: 1rem;
	font-size: 1rem;
	font-family: inherit;
	color: ${({theme}) => theme.light};
	background: transparent;
	border: none;
	outline: none;
	width: 100%;
`;

export const Button = styled.button`
	cursor: pointer;
	border: none;
	outline: none;
	padding: 1rem;
	background: ${({theme}) => theme.accent};
	color: ${({theme}) => theme.darkBg};
	border-radius: 0 0.5rem 0.5rem 0;
`;