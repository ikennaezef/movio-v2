import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import {Container, Error} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import Loader from '../components/Loader';
import SingleMovie from '../components/SingleMovie';

import { BiMoviePlay } from 'react-icons/bi';


const Movies = () => {

	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

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