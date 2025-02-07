// Bu dosya, film ve oyuncu verilerini temsil eden DTO (Data Transfer Object) arayüzlerini içerir.

export interface CastDTO {
  id: string;
  movie_id: number;
  name: string;
  original_name: string;
  popularity: string;
  profile_path: string;
  character: string;
}

export interface MovieDTO {
  id: string;
  movie_id: number;
  original_title: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  casts: CastDTO[];
}
