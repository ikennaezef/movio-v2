import { useState } from 'react';

import axios from '../axios';
import requests from '../requests';

import {Container, Error} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';
import {SearchBox, Input, Button} from '../components/styles/SearchBox.styled';

import Loader from '../components/Loader';
import SingleMovie from '../components/SingleMovie';

import { FaSearch } from 'react-icons/fa';

const Search = () => {

	const [search, setSearch] = useState('');
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		setResults([]);
		setLoading(true);
		try {
			const {data} = await axios.get(`${requests.search}${search}`);
			setResults(data.results.filter(item => item.media_type !== 'person' ));
			console.log(data.results.filter(item => item.media_type !== 'person' ));
			setLoading(false);
			return data;
		} catch	(err) {
			setError('It seems like an error occured. Please check your internet connection and refresh.');
			setLoading(false);
		}
		
	}
		

	const handleSearch = (e) => {
		e.preventDefault();
		if (search!== '') {
			fetchData();
		} 
	}

	return (
		<>
			<Container>
				<h1> <FaSearch /> Search</h1>
				<p>Find movies and TV shows from all over the world...</p>

				<SearchBox>
					<Input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for a movie or TV show..." />
					<Button onClick={handleSearch} > < FaSearch/> </Button>
				</SearchBox>
				{ loading && <Loader/> }
				{ error && <Error> {error} </Error> }
				<Grid>
				{ results && !loading &&
					results.map(movie => <SingleMovie key={movie.id} movie={movie} type={movie.media_type} />)
				}
				</Grid>
			</Container>
		</>
	)
}

export default Search