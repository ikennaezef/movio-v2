import { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

import { useDispatch, useSelector } from 'react-redux';
import { resetGenre } from '../features/genres';

import {Container, Error} from '../components/styles/Container.styled';
import {Grid} from '../components/styles/Grid.styled';

import Loader from '../components/Loader';
import Genres from '../components/Genres';
import SingleMovie from '../components/SingleMovie';
import ReactPaginate from 'react-paginate';

import { BiMoviePlay } from 'react-icons/bi';


const Movies = () => {

	const dispatch = useDispatch();
	const gen = useSelector((state) => state.genre.value);
	const savedBookmarks = useSelector(state => state.bookmarks.bookmarksList);

	const [results, setResults] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [totalPages, setTotalPages] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const genresList = [
		{ genre: 'Action', id: 28 },
		{ genre: 'Animation', id: 16 },
		{ genre: 'Sci Fi', id: 878 },
		{ genre: 'Comedy', id: 35 },
		{ genre: 'Drama', id: 18 },
		{ genre: 'Romance', id: 10749 },
		{ genre: 'War', id: 10752 },
		{ genre: 'Documentary', id: 99 },
		{ genre: 'Horror', id: 27 },
		{ genre: 'Family', id: 10751 },
		{ genre: 'Crime', id: 80 },
		{ genre: 'History', id: 36 },
		{ genre: 'Mystery', id: 9648 },
	]

	useEffect(() => {
		dispatch(resetGenre());
	}, [ dispatch ])

	const fetchData = async () => {
		setLoading(true);
		try {
			setError(null);
			const { data } = gen.id === 0 ? await axios.get(`${requests.fetchAllMovies}&page=${pageNumber}`) : await axios.get(`${requests.fetchMovieWithGenre}${gen.id}&page=${pageNumber}`);
			setResults(data.results);
			setTotalPages(data.total_pages);
			setLoading(false);
			return data;
		} catch (err) {
			setError('It seems like an error occured. Please check your internet connection and refresh.');
			setLoading(false);
		}			
	}

	useEffect(() => {
		window.scroll(0, 0);
		fetchData();
	}, [ gen, pageNumber ])

	useEffect(()=> {
		setPageNumber(1);
	}, [ gen ])

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
				<h1> <BiMoviePlay /> Popular Movies</h1>
				<p>Discover Popular Movies that you'd love</p>
				{ loading && <Loader /> }
				{ error ? <Error>{ error }</Error> : <Genres genreList={genresList} /> }
				<Grid>
				{ results && !loading &&
					results.map(movie => <SingleMovie key={movie.id} movie={movie} saved={checkSaved(movie)} type="movie"/>)
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

export default Movies