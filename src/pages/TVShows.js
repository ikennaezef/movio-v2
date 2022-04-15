import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import {Container} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import SingleMovie from '../components/SingleMovie';

import { FaDesktop } from 'react-icons/fa';

const TVShows = () => {

	const [results, setResults] = useState([]);

	useEffect(() => {		
		const fetchData = async () => {
			const request = await axios.get(requests.fetchAllSeries);
			setResults(request.data.results);
			console.log(request.data.results);
			return request;
		}
		fetchData();
	}, [ ])

	return (
		<>
			<Container>
				<h1> <FaDesktop /> TV Shows</h1>
				<p>Discover Popular TV Shows that you'd love</p>
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