import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

import axios from '../axios';
import { fetchSingleMovie } from '../requests';

import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, deleteBookmark } from '../features/bookmarks';

import {Container, Error} from '../components/styles/Container.styled';
import {Button, Grid, PosterContainer, MovieDetails, MovieName, Text, FadedText, Tagline, Plot, Pill, Rating, Similar, SimilarLink, ButtonGroup, BookMarkBtn, TrailerBtn} from '../components/styles/SinglePage.styled';

import Loader from '../components/Loader';
import Carousel from '../components/Carousel';
import { noPoster, img_500 } from '../config/config';

import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';


const SinglePage = () => {

	const dispatch = useDispatch();
	const savedBookmarks = useSelector(state => state.bookmarks.bookmarksList);

	const { id, type } = useParams();
	const navigate = useNavigate();

	const [movie, setMovie] = useState(null);
	const [videos, setVideos] = useState([]);
	const [actors, setActors] = useState([]);
	const [similar, setSimilar] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		setLoading(true);
		try{
			setError(null);
			const { data } = await axios.get(fetchSingleMovie(type, id));
			setMovie(data);
			setVideos(data.videos.results.filter(v => v.type === ("Trailer" || "Teaser")));
			setActors(data.credits.cast);
			setSimilar(data.similar.results.slice(0,9));
			setLoading(false);
			return data;
		} catch(err) {
			setError('It seems like an error occured. Please check your internet connection and refresh.');
			setLoading(false);
		}			
	}

	useEffect(() => {
		window.scroll(0, 0);
		fetchData();
	}, [ type, id ])

	const getYear = (year) => {
		return year.slice(0,4);
	}

	const handleSimilar = (id) => {
		setMovie(null);
		navigate(`/${type}/${id}`);
	}

	const toggleBookmark = (e) => {
		e.stopPropagation();
		let arr = savedBookmarks.filter(bk => bk.id === movie.id);
		if (arr.length > 0) {
			dispatch(deleteBookmark(movie));
		} else {
			dispatch(addBookmark({...movie, type}));
		}		
	}

	const checkSaved = (m) => {
		const arr = savedBookmarks.filter(bk => bk.id === m.id);
		return arr.length > 0;
	}
	

	return (
		<>
			<Container>
				<Button onClick={() => navigate(-1)} >Go Back</Button>
				{ loading && <Loader/> }
				{ error && <Error> {error} </Error> }
				{movie && !loading && <> 
					<Grid>
						<PosterContainer>
							<img src={movie?.poster_path === null ? noPoster : `${img_500}${movie.poster_path}`} alt={movie.name || movie.title}/>
						</PosterContainer>
						<MovieDetails>
							<MovieName> {movie.title || movie.name} </MovieName>
							{ movie.tagline && <Tagline>{movie.tagline}</Tagline> }
							<FadedText> {type === 'tv' ? 'TV Show' : 'Movie'} - {(movie.status === 'Released' || movie.status === 'Returning Series' || movie.status === 'Canceled' || movie.status === 'Ended') ? type === 'movie' ? movie.runtime + ' mins' : movie.number_of_seasons + ' seasons' : 'Coming Soon' }  </FadedText>
							<FadedText style={{marginBottom: 20}} >  {(movie.release_date || movie.first_air_date) && getYear(movie.release_date || movie.first_air_date)}</FadedText>
							{ movie.genres.map(gen => <Pill key={gen.id} > {gen.name} </Pill>) }
							<Plot>{movie.overview}</Plot>
							<Text>Rating: <Rating highlyRated={movie.vote_average >= 7} >{movie.vote_average}</Rating></Text>

							{actors && <Carousel list={actors.slice(0,9)} />}

							<Similar>Similar : {similar.map(s => <SimilarLink key={s.id} onClick={() => handleSimilar(s.id)} as="span" > { s.title || s.name }, </SimilarLink> )}</Similar>

							<ButtonGroup>
								

								{ checkSaved(movie) ?
									<BookMarkBtn  onClick={toggleBookmark}>
										<BsBookmarkFill /> Remove from Bookmarks
									</BookMarkBtn> : 
									<BookMarkBtn onClick={toggleBookmark}>
										<BsBookmark /> Add to Bookmarks
									</BookMarkBtn>
								}

								{ videos.length > 0 && <TrailerBtn 
									as="a"
									href={`https://www.youtube.com/watch?v=${videos[0].key}`}
									target="_blank"
								 > <FaYoutube /> Watch the Trailer</TrailerBtn> }
								</ButtonGroup>
						</MovieDetails>
					</Grid>
				 </>}
			</Container>
		</>
	)
}

export default SinglePage