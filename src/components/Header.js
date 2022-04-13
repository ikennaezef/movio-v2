import { StyledHeader } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Link } from 'react-router-dom';

import logo from '../images/default-monochrome.svg';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Link to="/">
					<img src={logo} alt="Movio Logo" />
				</Link>
			</Container>
		</StyledHeader>
	)
}

export default Header