import { useState, useEffect } from 'react';

import { setGenre } from '../features/genres';
import { useDispatch } from 'react-redux';

import { GenresContainer, GenreTablet } from './styles/Genres.styled';

const Genres = ({ genreList }) => {

	const dispatch = useDispatch();

	const [selectedGenre, setSelectedGenre] = useState(null);

	const toggleGenre = (gen) => {
		if (selectedGenre === gen ) {
			setSelectedGenre(null);
			dispatch(setGenre(selectedGenre));
			console.log('Toggled');
		} else {
			setSelectedGenre(gen);
			dispatch(setGenre(selectedGenre));
			console.log('Added');
		}
	}

	// useEffect(() => {
	// 	setGenre(selectedGenre);	
	// 	console.log(selectedGenre);
	// }, [selectedGenre, setGenre])

	return (
		<GenresContainer>
			{genreList.map(g => <GenreTablet key={g.id} onClick={() => toggleGenre(g)} active={selectedGenre == g} > {g.genre} </GenreTablet> )}
		</GenresContainer>
	)
}

export default Genres