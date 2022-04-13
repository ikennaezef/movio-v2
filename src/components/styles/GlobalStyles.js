import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Bahnschrift', sans-serif;
		background: ${({theme}) => theme.background};
		color: ${({theme}) => theme.light};
	}

	html {
		scroll-behavior: smooth;
		font-size: 16px;
	}


`