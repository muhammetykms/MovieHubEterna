// Bu fonksiyon, mock veri dosyasından film ve oyuncu verilerini alır
// ve MovieDTO ve CastDTO türlerine dönüştürerek döner.

import {MovieDTO, CastDTO} from '../data/MoviesDTO';
const mockData = require('../data/mockData.json');

export const fetchMovies = (): MovieDTO[] => {
  try {
    if (!mockData || !mockData.movies) {
      throw new Error('Movies data is missing');
    }

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
  } catch (error) {
    console.error('Error fetching movies:', error);
    // Hata durumunda boş bir dizi dönebiliriz veya uygun bir hata mesajı verebiliriz
    return [];
  }
};
