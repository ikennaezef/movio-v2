import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import {Container, Error} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import Loader from '../components/Loader';
import SingleMovie from '../components/SingleMovie';
import ReactPaginate from 'react-paginate';

import { AiTwotoneFire } from 'react-icons/ai'

import { useSelector } from 'react-redux';

const Trending = () => {

	const [results, setResults] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [totalPages, setTotalPages] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);


	const fetchData = async () => {
		setLoading(true);
		try{
			setError(null);
			const { data } = await axios.get(`${requests.fetchTrending}&page=${pageNumber}`);
			setResults(data.results);
			setTotalPages(data.total_pages);
			setLoading(false);
			return data;
		} catch(err) {
			setError('It seems like an error occured. Please check your internet connection and refresh.');
			setLoading(false);
		}			
	}

	const savedBookmarks = useSelector(state => state.bookmarks.bookmarksList);


	useEffect(() => {
		window.scroll(0, 0);
		fetchData();
	}, [ pageNumber ])

	const changePage = ({ selected }) => {
		setPageNumber(selected + 1);
	}

	const checkSaved = (m) => {
		const arr = savedBookmarks.filter(bk => bk.id === m.id);
		return arr.length > 0;
	}


	return ( 
		<>
			<Container>
				<h1> <AiTwotoneFire /> Trending</h1>
				<p>These are the most popular movies and TV shows this week</p>
				{ loading && <Loader /> }
				{ error && <Error>{ error }</Error> }
				<Grid>
				{ results && !loading &&
					results.map(movie => <SingleMovie key={movie.id} movie={movie} saved={checkSaved(movie)} type={movie.media_type}/>)
				}
				</Grid>
				{ !error && 
					<ReactPaginate
						previousLabel={"Prev"}
						nextLabel={"Next"}
						pageCount={ totalPages > 15 ? 15 : totalPages }
						onPageChange={changePage}
						containerClassName={"paginationBtns"}
						previousLinkClassName={"prevBtn"}
						nextLinkClassName={"nextBtn"}
						disabledClassName={"paginationDisabled"}
						activeClassName={"paginationActive"}
					 />
				 }
			</Container>
		</>
	)
}

export default Trending