const API_KEY = '122ec91e50f9ed5ea0df42c039e943ed';

const requests = {
	fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
	fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10765`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;