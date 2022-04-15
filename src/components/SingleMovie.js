import {Movie, PosterContainer, Poster, Bookmark, Badge, MovieName, Type, Date} from './styles/SingleMovie.styled'

import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const SingleMovie = ({movie, type}) => {

	const getYear = (year) => {
		return year.slice(0,4);
	}

	const shortenString = (string) => {
		if (string.length > 24) {
			return string.slice(0,24) + '...';
		}else {
			return string;
		}
	}

	return (
		<Movie>
			<PosterContainer>
				<Badge highlyRated={movie.vote_average >= 7} >{movie.vote_average}</Badge>
				<Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_name} />
				<Bookmark> <BsBookmark /> </Bookmark>
			</PosterContainer>
			<MovieName>{shortenString(movie.name || movie.title) }</MovieName>
			<Type>{type}</Type>
			<Date>{getYear(movie?.first_air_date || movie?.release_date) }</Date>
		</Movie>
	)
}

export default SingleMovie