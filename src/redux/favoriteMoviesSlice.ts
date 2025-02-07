import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDTO } from '../data/MoviesDTO'; // MovieDTO tipini import ediyoruz

// Favori filmleri tutan state'in yapısı
interface FavoriteMoviesState {
  favoriteMovies: MovieDTO[];
}

// Başlangıç durumu
const initialState: FavoriteMoviesState = {
  favoriteMovies: [],
};

// createSlice ile reducer ve aksiyonları tanımlıyoruz
const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies', // Slice adı
  initialState, // Başlangıç durumu
  reducers: {
    // Favori ekleme işlemi
    addFavorite: (state, action: PayloadAction<MovieDTO>) => {
      // Eğer film zaten favorilerdeyse eklemiyoruz
      if (!state.favoriteMovies.find(movie => movie.id === action.payload.id)) {
        state.favoriteMovies.push(action.payload);
      }
    },
    // Favori silme işlemi
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload);
    },
  },
});

// Aksiyonları dışa aktarıyoruz
export const { addFavorite, removeFavorite } = favoriteMoviesSlice.actions;

// Reducer'ı dışa aktarıyoruz
export default favoriteMoviesSlice.reducer;

