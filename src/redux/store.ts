import {configureStore} from '@reduxjs/toolkit';
import favoriteMoviesReducer, {
  loadFavoritesAsync,
} from './slices/favoriteMoviesSlice';

export const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
  },
});

// Uygulama açıldığında favori filmleri yükleyelim
store.dispatch(loadFavoritesAsync());
