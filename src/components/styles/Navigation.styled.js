import styled from 'styled-components';

export const StyledNav = styled.nav`
	background: ${({theme})=> theme.darkBg };
	padding: 1rem;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 100;
`;

export const LinksContainer = styled.div`
	max-width: 600px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NavLink = styled.div`
	a {
		display: inline-block;
		font-size: 1rem;
		text-align: center;
		text-decoration: none;
		color: ${({theme, active})=> active ? theme.accent : theme.light };
	}
`;