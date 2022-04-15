import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import {Container} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import Loader from '../components/Loader';
import SingleMovie from '../components/SingleMovie';

import { AiTwotoneFire } from 'react-icons/ai'

const Trending = () => {

	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {	
		setLoading(true);	
		const fetchData = async () => {
			const request = await axios.get(requests.fetchTrending);
			setResults(request.data.results);
			setLoading(false);
			return request;
		}
		fetchData();
	}, [ ])

	return ( 
		<>
			<Container>
				<h1> <AiTwotoneFire /> Trending This week</h1>
				<p>These are the most popular movies and TV shows this week</p>
				{ loading && <Loader /> }
				<Grid>
				{
					results.map(movie => <SingleMovie key={movie.id} movie={movie} type={movie.media_type==='tv' ? 'TV Show' : 'Movie'}/>)
				}
				</Grid>
			</Container>
		</>
	)
}

export default Trending