import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import {Container} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import SingleMovie from '../components/SingleMovie';

import { RiMovie2Fill } from 'react-icons/ri'


const Movies = () => {

	const [results, setResults] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(requests.fetchAllMovies);
			console.log(request)
			setResults(request.data.results);
			console.log(results);
			return request;
		}
		fetchData();
	}, [])

	return (
		<>
			<Container>
				<h1> <RiMovie2Fill /> Popular Movies</h1>
				<p>These are the most popular movies and TV shows this week</p>
				<Grid>
				{
					results.map(movie => <SingleMovie key={movie.id} movie={movie}/>)
				}
				</Grid>
			</Container>
		</>
	)
}

export default Movies