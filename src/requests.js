const API_KEY = '122ec91e50f9ed5ea0df42c039e943ed';

const requests = {
	fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
	fetchAllMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
	fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10765`,
	fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchAllSeries: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`,
	fetchActionSeries: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
	fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorSeries: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
	fetchDramaSeries: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
	fetchSciFiSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
	fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
	search: `/search/multi?api_key=${API_KEY}&query=`
}

export default requests;


// https://api.themoviedb.org/3/movie/343611?api_key={api_key}