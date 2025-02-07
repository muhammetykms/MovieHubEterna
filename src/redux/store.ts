import {configureStore} from '@reduxjs/toolkit';
import favoriteMoviesReducer from './favoriteMoviesSlice';
import {loadFavoriteMovies} from './favoriteMoviesSlice';

export const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
  },
});

// Uygulama açıldığında favori filmleri yükleyelim
store.dispatch(loadFavoriteMovies());
