import {addFavorite} from '../src/redux/favoriteMoviesSlice';
import {store} from '../src/redux/store';
import {MovieDTO} from '../src/data/MoviesDTO';

describe('Redux Favorite Movies Tests', () => {
  test('dispatch addFavorite action and update store', () => {
    const movie: MovieDTO = {id: '1', original_title: 'Movie 1'} as MovieDTO;

    store.dispatch(addFavorite(movie));
    const state = store.getState();
    expect(state.favoriteMovies.favoriteMovies).toContainEqual(movie);
  });
});
