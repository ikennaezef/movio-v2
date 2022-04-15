import { StyledNav, LinksContainer, NavLink } from './styles/Navigation.styled';
import { Link, useLocation } from 'react-router-dom';

import { AiTwotoneFire } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { FaDesktop } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { BsBookmarkFill } from 'react-icons/bs';


const Navigation = () => {

	const { pathname } = useLocation();

	return (
		<StyledNav>
			
				<LinksContainer>
					<NavLink active={pathname === '/'} >
						<Link to="/">
							<AiTwotoneFire />
							<p>Trending</p>
						</Link>
					</NavLink>
					<NavLink active={pathname === '/movies'}>
						<Link to="/movies" >
							<BiMoviePlay />
							<p>Movies</p>
						</Link>
					</NavLink>
					<NavLink active={pathname === '/tvshows'}>
						<Link to="/tvshows" >
							<FaDesktop />
							<p>TV Shows</p>
						</Link>
					</NavLink>
					<NavLink active={pathname === '/search'}>
						<Link to="/search" >
							<FaSearch />
							<p>Search</p>
						</Link>
					</NavLink>
					<NavLink active={pathname === '/bookmarks'}>
						<Link to="/bookmarks" >
							<BsBookmarkFill />
							<p>Bookmarks</p>
						</Link>
					</NavLink>
				</LinksContainer>
			
		</StyledNav>
	)
}

export default Navigation