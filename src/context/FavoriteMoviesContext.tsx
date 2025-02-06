import {createContext, useContext, useState} from 'react';
import {MovieDTO} from '../data/MoviesDTO';

type FavoriteMoviesContextType = {
  favoriteMovies: MovieDTO[];
  addFavorite: (movie: MovieDTO) => void;
  removeFavorite: (movieId: number) => void;
};

const FavoriteMoviesContext = createContext<FavoriteMoviesContextType>({
  favoriteMovies: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const useFavoriteMovies = () => useContext(FavoriteMoviesContext);

export const FavoriteMoviesProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [favoriteMovies, setFavoriteMovies] = useState<MovieDTO[]>([]);

  const addFavorite = (movie: MovieDTO) => {
    // Eğer film zaten favorilerdeyse eklemiyoruz
    if (favoriteMovies.find(item => item.id === movie.id)) return;

    setFavoriteMovies(prev => [...prev, movie]);
    console.log('Added to favorites:', movie); // Favoriye eklenen film
  };

  const removeFavorite = (movieId: number) => {
    setFavoriteMovies(prev => prev.filter(movie => movie.id !== movieId));
    console.log('Removed from favorites:', movieId); // Favoriden çıkarılan film
  };

  return (
    <FavoriteMoviesContext.Provider
      value={{favoriteMovies, addFavorite, removeFavorite}}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};
