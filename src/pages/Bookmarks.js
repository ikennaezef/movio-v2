import {Container} from '../components/styles/Container.styled';

import { BsBookmarkFill } from 'react-icons/bs';

const Bookmarks = () => {
	return (
		<>
			<Container>
				<h1> <BsBookmarkFill /> Your Bookmarks</h1>
				<p>Here are the movies and shows you've saved from all across Movio...</p>
			</Container>
		</>
	)
}

export default Bookmarks