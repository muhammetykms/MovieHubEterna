import {MovieDTO, CastDTO} from '../data/MoviesDTO'; // DTO dosyasını import ediyoruz

// Mock verisini import ediyoruz
const mockData = require('../data/MockData.json'); // JSON verisini import ettik

export const fetchMovies = (): MovieDTO[] => {
  // JSON verisini alıp DTO'ya dönüştürüyoruz

  return mockData.movies.map((movie: any) => {
    const casts = movie.casts.map((cast: any) => {
      return new CastDTO(
        cast.id,
        cast.movie_id,
        cast.name,
        cast.original_name,
        cast.popularity,
        cast.profile_path,
        cast.character,
      );
    });

    return new MovieDTO(
      movie.id,
      movie.movie_id,
      movie.original_title,
      movie.original_language,
      movie.overview,
      movie.popularity,
      movie.poster_path,
      movie.backdrop_path,
      movie.release_date,
      movie.vote_average,
      movie.vote_count,
      movie.adult,
      casts,
    );
  });
};
