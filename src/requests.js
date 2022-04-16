const API_KEY = '122ec91e50f9ed5ea0df42c039e943ed';

const requests = {
	fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
	fetchAllMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`,
	fetchMovieWithGenre: `/discover/movie?api_key=${API_KEY}&with_genres=`,
	fetchAllSeries: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`,
	fetchSeriesWithGenre: `/discover/tv?api_key=${API_KEY}&with_genres=`,
	search: `/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`,
}

export default requests;


// https://api.themoviedb.org/3/movie/343611?api_key={api_key}