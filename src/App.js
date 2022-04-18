import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components'; 
import './App.css';
import { GlobalStyles } from './components/styles/GlobalStyles'
import theme from './theme';

import Header from './components/Header';
import Navigation from './components/Navigation';

import TrendingPage from './pages/Trending';
import MoviesPage from './pages/Movies';
import TVShowsPage from './pages/TVShows';
import SearchPage from './pages/Search';
import BookmarksPage from './pages/Bookmarks';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme} >
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" exact element={ <TrendingPage /> } />
            <Route path="/movies" element={ <MoviesPage /> } />
            <Route path="/tvshows" element={ <TVShowsPage /> } />
            <Route path="/search" element={ <SearchPage /> } />
            <Route path="/bookmarks" element={ <BookmarksPage /> } />
            <Route path="/:type/:id" element={ <SinglePage /> } />
          </Routes>
          <Navigation />
      </ThemeProvider>
    </Router>
  );
}

export default App;
