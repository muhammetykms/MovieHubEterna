import {MovieDTO} from '../data/MoviesDTO';

export const groupMoviesInPairs = (movies: MovieDTO[]) => {
  const groupedMovies = [];
  for (let i = 0; i < movies.length; i += 2) {
    groupedMovies.push(movies.slice(i, i + 2));
  }
  return groupedMovies;
};
