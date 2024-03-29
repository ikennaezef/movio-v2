import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, deleteBookmark } from '../features/bookmarks';

import { Movie, PosterContainer, Poster, Bookmark, Badge, MovieName, Type, Date } from './styles/SingleMovie.styled';

import { noPoster, img_500 } from '../config/config';

import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const SingleMovie = ({ movie, type, saved }) => {

	const dispatch = useDispatch();
	const savedBookmarks = useSelector(state => state.bookmarks.bookmarksList);

	const navigate = useNavigate();

	const getYear = (year) => {
		return year.slice(0, 4) || year;
	}

	const shortenString = (string) => {
		if (string.length > 24) {
			return string.slice(0, 24) + '...';
		} else {
			return string;
		}
	}

	const selectMovie = (e) => {
		if (!e.target.classList.contains('bookmark')) {
			navigate(`/${type}/${movie.id}`);
		}
	}

	const toggleBookmark = (e) => {
		e.stopPropagation();
		let arr = savedBookmarks.filter(bk => bk.id === movie.id);
		if (arr.length > 0) {
			dispatch(deleteBookmark(movie));
		} else {
			dispatch(addBookmark({ ...movie, type }));
		}
	}

	return (
		<Movie onClick={selectMovie} >
			<PosterContainer>
				<Badge highlyRated={movie.vote_average >= 7} >{movie.vote_average.toFixed(1)}</Badge>
				<Poster src={movie.poster_path === null ? noPoster : `${img_500}${movie.poster_path}`} alt={movie.original_name} />
				<Bookmark className='bookmark' onClick={toggleBookmark} > {saved ? <BsBookmarkFill className='bookmark' /> : <BsBookmark className='bookmark' />} </Bookmark>
			</PosterContainer>
			<MovieName>{shortenString(movie.name || movie.title)}</MovieName>
			<Type>{type === 'tv' ? 'TV Show' : 'Movie'}</Type>
			<Date>{(movie.release_date || movie.first_air_date) && getYear(movie.release_date || movie.first_air_date)}</Date>
		</Movie>
	)
}

export default SingleMovie