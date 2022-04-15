import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import {Container} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import SingleMovie from '../components/SingleMovie';

import { BiMoviePlay } from 'react-icons/bi';


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
				<h1> <BiMoviePlay /> Popular Movies</h1>
				<p>Discover Popular Movies that you'd love</p>
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