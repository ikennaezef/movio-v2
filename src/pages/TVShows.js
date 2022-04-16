import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import {useDispatch, useSelector} from 'react-redux';
import { resetGenre } from '../features/genres';

import {Container, Error} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import Loader from '../components/Loader';
import Genres from '../components/Genres';
import SingleMovie from '../components/SingleMovie';

import { FaDesktop } from 'react-icons/fa';

const TVShows = () => {

	const dispatch = useDispatch();
	const gen = useSelector((state) => state.genre.value);

	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const genresList = [
		{ genre: 'Action & Adventure', id: 10759 },
		{ genre: 'Animation', id: 16 },
		{ genre: 'Comedy', id: 35 },
		{ genre: 'Drama', id: 18 },
		{ genre: 'Soap', id: 10766 },
		{ genre: 'War & Politics', id: 10768 },
		{ genre: 'Documentary', id: 99 },
		{ genre: 'Sci Fi & Fantasy', id: 10765 },
		{ genre: 'Mystery', id: 9648 },
		{ genre: 'Crime', id: 80 },
		{ genre: 'Talk', id: 10767 },
	]

	useEffect(() => {
		dispatch(resetGenre());
	}, [ dispatch ])

	useEffect(() => {
		setLoading(true);		
		const fetchData = async () => {
			try {
				const request = gen.id === 0 ? await axios.get(requests.fetchAllSeries) : await axios.get(requests.fetchSeriesWithGenre + gen.id);
				console.log(request);
				setResults(request.data.results);
				setLoading(false);
				return request;
			} catch (err) {
				setError('It seems like an error occured. Please check your internet connection and refresh.');
				setLoading(false);
			}
			
		}
		fetchData();
	}, [ gen ])

	return (
		<>
			<Container>
				<h1> <FaDesktop /> TV Shows</h1>
				<p>Discover Popular TV Shows that you'd love</p>
				{ loading && <Loader /> }
				{ error ? <Error>{ error }</Error> : <Genres genreList={genresList} /> }				
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