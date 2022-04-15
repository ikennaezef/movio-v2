import { StyledHeader } from './styles/Header.styled';
import { Link } from 'react-router-dom';

import logo from '../images/default-monochrome.svg';

const Header = () => {
	return (
		<StyledHeader>
			<div>
				<Link to="/">
					<img src={logo} alt="Movio Logo" />
				</Link>
			</div>
		</StyledHeader>
	)
}

export default Header