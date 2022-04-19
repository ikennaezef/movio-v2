import { useNavigate } from 'react-router-dom'

import {Movie, PosterContainer, Poster, Bookmark, Badge, MovieName, Type, Date} from './styles/SingleMovie.styled'

import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const SingleMovie = ({movie, type}) => {

	const navigate = useNavigate();

	const getYear = (year) => {
		return year.slice(0,4) || year;
	}

	const shortenString = (string) => {
		if (string.length > 24) {
			return string.slice(0,24) + '...';
		}else {
			return string;
		}
	}

	const selectMovie = () => {
		navigate(`/${type}/${movie.id}`);

		console.log(type);
	}

	return (
		<Movie onClick={selectMovie} >
			<PosterContainer>
				<Badge highlyRated={movie.vote_average >= 7} >{movie.vote_average}</Badge>
				<Poster src={movie.poster_path === null ? 'https://www.movienewz.com/img/films/poster-holder.jpg' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_name} />
				<Bookmark> <BsBookmark /> </Bookmark>
			</PosterContainer>
			<MovieName>{shortenString(movie.name || movie.title) }</MovieName>
			<Type>{type === 'tv' ? 'TV Show' : 'Movie' }</Type>
			<Date>{ (movie.release_date || movie.first_air_date) && getYear(movie.release_date || movie.first_air_date) }</Date>
		</Movie>
	)
}

export default SingleMovie