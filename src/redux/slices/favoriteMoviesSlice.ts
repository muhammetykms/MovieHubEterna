// src/redux/slices/favoriteMoviesSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MovieDTO} from '../../data/MoviesDTO';
import {saveFavoriteMovies, loadFavoriteMovies} from '../../utils/storage';

interface FavoriteMoviesState {
  favoriteMovies: MovieDTO[];
}

const initialState: FavoriteMoviesState = {
  favoriteMovies: [],
};

// Slice, favori filmleri yönetmek için gerekli işlemleri içerir (ekleme, silme ve yükleme).
const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    setFavoriteMovies: (state, action: PayloadAction<MovieDTO[]>) => {
      state.favoriteMovies = action.payload;
    },
    addFavorite: (state, action: PayloadAction<MovieDTO>) => {
      if (!state.favoriteMovies.some(movie => movie.id === action.payload.id)) {
        state.favoriteMovies.push(action.payload);
        saveFavoriteMovies(state.favoriteMovies);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        movie => movie.id !== action.payload,
      );
      saveFavoriteMovies(state.favoriteMovies);
    },
  },
});

export const {setFavoriteMovies, addFavorite, removeFavorite} =
  favoriteMoviesSlice.actions;

export const loadFavoritesAsync = () => async (dispatch: any) => {
  const movies = await loadFavoriteMovies();
  if (movies) dispatch(setFavoriteMovies(movies));
};

export default favoriteMoviesSlice.reducer;
