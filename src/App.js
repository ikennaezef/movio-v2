import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components'; 
import './App.css';
import { GlobalStyles } from './components/styles/GlobalStyles'
import theme from './theme';

import Header from './components/Header';
import Navigation from './components/Navigation';
import {Toaster} from 'react-hot-toast';

import TrendingPage from './pages/Trending';
import MoviesPage from './pages/Movies';
import TVShowsPage from './pages/TVShows';
import SearchPage from './pages/Search';
import BookmarksPage from './pages/Bookmarks';
import SinglePage from './pages/SinglePage';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const savedBookmarks = useSelector(state => state.bookmarks.bookmarksList);

  useEffect(() => {
    console.log(savedBookmarks);
  }, [savedBookmarks])

  return (
    <Router>
      <ThemeProvider theme={theme} >
          <GlobalStyles />
          <Header />
          <Toaster />
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
