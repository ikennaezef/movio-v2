import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		max-width: 100%;
	}

	body {
		font-family: 'Rubik', 'Bahnschrift', sans-serif;
		background: ${({theme}) => theme.background};
		color: ${({theme}) => theme.light};
	}

	html {
		scroll-behavior: smooth;
		font-size: 16px;
	}

	.paginationBtns {
	  width: 80%;
	  margin: 0 auto;
	  display: flex;
	  justify-content: center;
	  flex-wrap: wrap;
	  list-style: none;
	}

	.paginationBtns a {
	  font-size: 1rem;
	  display: inline-block;
	  padding: 0.5rem;
	  margin: 0.2rem;
	  border-radius: 0.4rem;
	  background-color: ${({theme}) => theme.movieBackground};
	  cursor: pointer;
	  transition: 0.3s ease;
	}

	.paginationBtns a:hover, 
	 .paginationActive a {
	  color: ${({theme}) => theme.background};
	  background-color: ${({theme}) => theme.accent};
	}
`