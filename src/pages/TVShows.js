import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import {Container} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import Loader from '../components/Loader';
import SingleMovie from '../components/SingleMovie';

import { FaDesktop } from 'react-icons/fa';

const TVShows = () => {

	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);		
		const fetchData = async () => {
			const request = await axios.get(requests.fetchAllSeries);
			setResults(request.data.results);
			setLoading(false);
			return request;
		}
		fetchData();
	}, [ ])

	return (
		<>
			<Container>
				<h1> <FaDesktop /> TV Shows</h1>
				<p>Discover Popular TV Shows that you'd love</p>
				{ loading && <Loader /> }
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