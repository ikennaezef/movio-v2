import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import {Container, Error} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import Loader from '../components/Loader';
import SingleMovie from '../components/SingleMovie';

import { FaDesktop } from 'react-icons/fa';

const TVShows = () => {

	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);		
		const fetchData = async () => {
			try {
				const request = await axios.get(requests.fetchAllSeries);
				setResults(request.data.results);
				setLoading(false);
				return request;
			} catch (err) {
				setError('It seems like an error occured. Please check your internet connection and refresh.');
				setLoading(false);
			}
			
		}
		fetchData();
	}, [ ])

	return (
		<>
			<Container>
				<h1> <FaDesktop /> TV Shows</h1>
				<p>Discover Popular TV Shows that you'd love</p>
				{ loading && <Loader /> }
				{ error && <Error>{ error }</Error> }
				<Grid>
				{
					results.map(movie => <SingleMovie key={movie.id} movie={movie} type="TV Show" />)
				}
				</Grid>
			</Container>
		</>
	)
}

export default TVShows