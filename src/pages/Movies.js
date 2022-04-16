import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import {Container, Error} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import Loader from '../components/Loader';
import Genres from '../components/Genres';
import SingleMovie from '../components/SingleMovie';

import { BiMoviePlay } from 'react-icons/bi';


const Movies = () => {

	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const genresList = [
		{ genre: 'Action', id: 28 },
		{ genre: 'Comedy', id: 35 },
		{ genre: 'Drama', id: 18 },
		{ genre: 'Romance', id: 10749 },
		{ genre: 'War', id: 10752 },
		{ genre: 'Documentary', id: 99 },
		{ genre: 'Horror', id: 27 },
		{ genre: 'Family', id: 10751 },
		{ genre: 'Crime', id: 80 },
	]

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			try {
				const request = await axios.get(requests.fetchAllMovies);
				setResults(request.data.results);
				setLoading(false);
				return request;
			} catch (err) {
				setError('It seems like an error occured. Please check your internet connection and refresh.');
				setLoading(false);
			}			
		}
		fetchData();
	}, [])

	return (
		<>
			<Container>
				<h1> <BiMoviePlay /> Popular Movies</h1>
				<p>Discover Popular Movies that you'd love</p>
				{ loading && <Loader /> }
				{ error && <Error>{ error }</Error> }				
				<Genres genreList={genresList} />
				<Grid>
				{
					results.map(movie => <SingleMovie key={movie.id} movie={movie} type="Movie"/>)
				}
				</Grid>
			</Container>
		</>
	)
}

export default Movies