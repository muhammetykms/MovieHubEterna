// MovieDTO ve CastDTO tanımlamaları gerçekleştirildi


export class CastDTO {
  id: string;
  movie_id: number;
  name: string;
  original_name: string;
  popularity: string;
  profile_path: string;
  character: string;

  constructor(
    id: string,
    movie_id: number,
    name: string,
    original_name: string,
    popularity: string,
    profile_path: string,
    character: string,
  ) {
    this.id = id;
    this.movie_id = movie_id;
    this.name = name;
    this.original_name = original_name;
    this.popularity = popularity;
    this.profile_path = profile_path;
    this.character = character;
  }
}

export class MovieDTO {
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

  constructor(
    id: string,
    movie_id: number,
    original_title: string,
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    vote_average: number,
    vote_count: number,
    adult: boolean,
    casts: CastDTO[],
  ) {
    this.id = id;
    this.movie_id = movie_id;
    this.original_title = original_title;
    this.original_language = original_language;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.backdrop_path = backdrop_path;
    this.release_date = release_date;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
    this.adult = adult;
    this.casts = casts;
  }
}
