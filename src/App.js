import { useLayoutEffect } from 'react';
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

import { useDispatch, useSelector } from 'react-redux';
import { fillBookmarks, addBookmark } from './features/bookmarks';


function App() {

  const dispatch = useDispatch();
  const savedBookmarks = useSelector(state => state.bookmarks.bookmarksList);

  const fetchBookmarks = () => {
    if (localStorage.getItem('savedBookmarks')) {
      let localBookmarks = JSON.parse(localStorage.getItem('savedBookmarks'));
      dispatch(fillBookmarks(localBookmarks));
      console.log(localBookmarks);
    } else {
      console.log('Nothing');
    }
  }

  useLayoutEffect(() => {
    fetchBookmarks();
  }, [])

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
