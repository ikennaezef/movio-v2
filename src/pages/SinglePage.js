import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

import axios from '../axios';
import { fetchSingleMovie } from '../requests';

import {Container} from '../components/styles/Container.styled';
import {Button, Grid, PosterContainer, MovieDetails} from '../components/styles/SinglePage.styled';


const SinglePage = () => {

	const { id, type } = useParams();
	const navigate = useNavigate();

	const [movie, setMovie] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		setLoading(true);
		try{
			setError(null);
			const { data } = await axios.get(fetchSingleMovie(type, id));
			setMovie(data);
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

	

	return (
		<>
			<Container>
				<Button>Go Back</Button>
				<Grid>
					<PosterContainer>
						<img src={movie.poster_path === null ? 'https://www.movienewz.com/img/films/poster-holder.jpg' : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name || movie.title}/>
					</PosterContainer>
				</Grid>
				Single Page
			</Container>
		</>
	)
}

export default SinglePage