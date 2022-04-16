import { useState } from 'react';

import { setGenre, resetGenre } from '../features/genres';
import { useDispatch } from 'react-redux';

import { GenresContainer, GenreTablet } from './styles/Genres.styled';

const Genres = ({ genreList, setGen }) => {

	const dispatch = useDispatch();

	const [selectedGenre, setSelectedGenre] = useState({ genre: '', id: 0 });

	const toggleGenre = (gen) => {
		const initialValue = { genre: '', id: 0 };
		if (selectedGenre.id === gen.id ) {
			setSelectedGenre(initialValue);
			return dispatch(resetGenre());
		} else {
			setSelectedGenre(gen);
			return dispatch(setGenre(gen));
		}
	}

	return (
		<GenresContainer>
			{genreList.map(g => <GenreTablet key={g.id} onClick={() => toggleGenre(g)} active={selectedGenre.id === g.id} > {g.genre} </GenreTablet> )}
		</GenresContainer>
	)
}

export default Genres