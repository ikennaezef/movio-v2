import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
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
	  border: 1px solid ${({theme}) => theme.accent};
	  cursor: pointer;
	  transition: 0.3s ease;
	}

	.paginationBtns a:hover {
	  color: ${({theme}) => theme.background};
	  background-color: ${({theme}) => theme.accent};
	}

	.paginationActive a {
	  color: ${({theme}) => theme.background};
	  background-color: ${({theme}) => theme.accent};
	}


`