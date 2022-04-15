import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import {Container, Error} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import Loader from '../components/Loader';
import SingleMovie from '../components/SingleMovie';

import { AiTwotoneFire } from 'react-icons/ai'

const Trending = () => {

	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {	
		setLoading(true);	
		const fetchData = async () => {
			try{
				setError(null);
				const request = await axios.get(requests.fetchTrending);
				setResults(request.data.results);
				setLoading(false);
				return request;
			} catch(err) {
				setError('It seems like an error occured. Please check your internet connection and refresh.');
				setLoading(false);
			}			
		}
		
		fetchData();
	}, [ ])

	return ( 
		<>
			<Container>
				<h1> <AiTwotoneFire /> Trending This week</h1>
				<p>These are the most popular movies and TV shows this week</p>
				{ loading && <Loader /> }
				{ error && <Error>{ error }</Error> }
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