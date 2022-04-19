import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

import axios from '../axios';
import { fetchSingleMovie } from '../requests';

import {Container, Error} from '../components/styles/Container.styled';
import {Button, Grid, PosterContainer, MovieDetails, MovieName, Text, FadedText, Tagline, Plot, Pill, Rating, SimilarLink, ButtonGroup, BookMarkBtn, TrailerBtn} from '../components/styles/SinglePage.styled';

import Loader from '../components/Loader';

import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';


const SinglePage = () => {

	const { id, type } = useParams();
	const navigate = useNavigate();

	const [movie, setMovie] = useState(null);
	const [videos, setVideos] = useState([]);
	const [similar, setSimilar] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		setLoading(true);
		try{
			setError(null);
			const { data } = await axios.get(fetchSingleMovie(type, id));
			setMovie(data);
			setVideos(data.videos.results.filter(v => v.type ==="Trailer"));
			setSimilar(data.similar.results.slice(0,5));
			console.log(data);
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
		navigate(`/${type}/${id}`);
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
							<img src={movie?.poster_path === null ? 'https://www.movienewz.com/img/films/poster-holder.jpg' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name || movie.title}/>
						</PosterContainer>
						<MovieDetails>
							<MovieName> {movie.title || movie.name} </MovieName>
							{ movie.tagline && <Tagline>{movie.tagline}</Tagline> }
							<FadedText> {type === 'tv' ? 'TV Show' : 'Movie'} - {(movie.status === 'Released' || movie.status === 'Returning Series') ? type === 'movie' ? movie.runtime + ' mins' : movie.number_of_seasons + ' seasons' : 'Coming Soon' }  </FadedText>
							<FadedText style={{marginBottom: 20}} >  {(movie.release_date || movie.first_air_date) && getYear(movie.release_date || movie.first_air_date)}</FadedText>
							{ movie.genres.map(gen => <Pill key={gen.id} > {gen.name} </Pill>) }
							<Plot>{movie.overview}</Plot>
							<Text>Rating: <Rating highlyRated={movie.vote_average >= 7} >{movie.vote_average}</Rating></Text>
							<Text>Similar : {similar.map(s => <SimilarLink onClick={() => handleSimilar(s.id)} as="span" key={s.id} > { s.title || s.name }, </SimilarLink> )}</Text>
							<ButtonGroup>
								<BookMarkBtn>
									<BsBookmark/> Add To Bookmarks
								</BookMarkBtn>

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