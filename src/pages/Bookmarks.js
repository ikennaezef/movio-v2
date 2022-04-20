import { useEffect } from 'react';

import {Container} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import { useSelector } from 'react-redux';

import SingleMovie from '../components/SingleMovie';

import { BsBookmarkFill } from 'react-icons/bs';

const Bookmarks = () => {

	const savedBookmarks = useSelector(state => state.bookmarks.bookmarksList);

	const checkSaved = (m) => {
		const arr = savedBookmarks.filter(bk => bk.id === m.id);
		return arr.length > 0;
	}

	useEffect(() => {
		window.scroll(0, 0);
	}, [])

	return (
		<>
			<Container>
				<h1> <BsBookmarkFill /> Your Bookmarks</h1>
				<p>Here are the movies and shows you've saved from all across Movio...</p>
				{ savedBookmarks.length === 0 && <p>You do not have any bookmarks saved.</p> }
				<Grid>
					{ savedBookmarks.length > 0 &&
						savedBookmarks.map(bookmark => <SingleMovie key={bookmark.id} movie={bookmark} saved={checkSaved(bookmark)} type={bookmark.type}/>)
					}
				</Grid>
				
			</Container>
		</>
	)
}

export default Bookmarks