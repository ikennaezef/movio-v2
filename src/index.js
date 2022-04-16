import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import bookmarkReducer from './features/bookmarks';
import genreReducer from './features/genres';

const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
    genre: genreReducer
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
