import { useState, useEffect } from 'react';

import { GenresContainer, GenreTablet } from './styles/Genres.styled';

const Genres = ({ genreList, setGenre }) => {

	const [selectedGenre, setSelectedGenre] = useState(null);

	const toggleGenre = (gen) => {
		if (selectedGenre === gen ) {
			setSelectedGenre(null);
			console.log('Toggled');
		} else {
			setSelectedGenre(gen);
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