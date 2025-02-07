import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MovieDTO} from '../../src/data/MoviesDTO';

// Başlangıç durumu
interface FavoriteMoviesState {
  favoriteMovies: MovieDTO[];
}

const initialState: FavoriteMoviesState = {
  favoriteMovies: [],
};

// Redux slice'ı
const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    // Favori filmleri set etme
    setFavoriteMovies: (state, action: PayloadAction<MovieDTO[]>) => {
      state.favoriteMovies = action.payload;
    },

    // Favori film ekleme
    addFavorite: (state, action: PayloadAction<MovieDTO>) => {
      const movieExists = state.favoriteMovies.some(
        movie => movie.id === action.payload.id,
      );
      if (!movieExists) {
        state.favoriteMovies.push(action.payload);
        console.log('Movie added to favorites:', action.payload); // Favoriye eklerken logla
        saveFavoriteMovies(state.favoriteMovies); // Favoriyi AsyncStorage'a kaydet
      } else {
        console.log('Movie already in favorites:', action.payload); // Eğer film zaten favorilerdeyse logla
      }
    },

    // Favori film silme
    removeFavorite: (state, action: PayloadAction<number>) => {
      const movieToRemove = state.favoriteMovies.find(
        movie => movie.id === action.payload,
      );
      state.favoriteMovies = state.favoriteMovies.filter(
        movie => movie.id !== action.payload,
      );
      console.log('Removed movie from favorites:', movieToRemove); // Favoriden silme sırasında logla
      saveFavoriteMovies(state.favoriteMovies); // Favoriyi AsyncStorage'a kaydet
    },
  },
});

// Favori filmleri AsyncStorage'a kaydetme
export const saveFavoriteMovies = async (movies: MovieDTO[]) => {
  try {
    console.log('Saving favorite movies to AsyncStorage:', movies); // Veriyi kaydetmeden önce logla
    const serializedMovies = JSON.stringify(movies); // JSON.stringify kullanarak veriyi düzgün formatta kaydedelim
    await AsyncStorage.setItem('favoriteMovies', serializedMovies); // AsyncStorage'a kaydet
    console.log('Favorite movies saved successfully!');
  } catch (error) {
    console.error('Error saving favorite movies to AsyncStorage:', error); // Hata olursa logla
  }
};

// Favori filmleri AsyncStorage'ten yükleme
export const loadFavoriteMovies = () => async (dispatch: any) => {
  try {
    console.log('Loading favorite movies from AsyncStorage...');
    const favoriteMovies = await AsyncStorage.getItem('favoriteMovies'); // AsyncStorage'ten al
    if (favoriteMovies) {
      console.log('Favorite movies loaded from AsyncStorage:', favoriteMovies); // Veriyi doğru şekilde aldıysak
      dispatch(setFavoriteMovies(JSON.parse(favoriteMovies))); // Redux'a yükle
    } else {
      console.log('No favorite movies found in AsyncStorage'); // Eğer veri yoksa
    }
  } catch (error) {
    console.error('Error loading favorite movies from AsyncStorage:', error); // Hata varsa
  }
};

// Export edilen işlemler
export const {setFavoriteMovies, addFavorite, removeFavorite} =
  favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;
