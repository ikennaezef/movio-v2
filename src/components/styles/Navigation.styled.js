import styled from 'styled-components';

export const StyledNav = styled.nav`
	background: ${({theme})=> theme.darkBg };
	padding: 1rem;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 100;

	@media (max-width: 370px) {
		padding: 1rem 0.3rem;
	}
`;

export const LinksContainer = styled.div`
	max-width: 600px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NavLink = styled.div`
	margin: 0 0.2rem;
	max-width: 100%;

	a {
		display: inline-block;
		font-size: 1rem;
		text-align: center;
		text-decoration: none;
		color: ${({theme, active})=> active ? theme.accent : theme.light };
	}

	@media (max-width: 376px) {
		a {
			font-size: 0.8rem;
		}
	}
`;