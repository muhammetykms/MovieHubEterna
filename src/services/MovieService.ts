import {MovieDTO, CastDTO} from '../data/MoviesDTO';

const mockData = require('../data/MockData.json');

export const fetchMovies = (): MovieDTO[] => {
  return mockData.movies.map(
    (movie: (typeof mockData.movies)[0]): MovieDTO => ({
      ...movie,
      casts: movie.casts.map(
        (cast: (typeof movie.casts)[0]): CastDTO => ({
          ...cast,
        }),
      ),
    }),
  );
};
