import {fetchMovies} from '../src/services/MovieService';
import mockData from '../src/data/mockData.json';

jest.mock('../src/services/MovieService', () => ({
  fetchMovies: jest.fn(),
}));

test('fetchMovies , mockData.json dan filmleri döndürmeli', async () => {
  const mockData = [
    {
      id: '1',
      original_title: 'Escape Plan 2: Hades',
      popularity: 25.05,
      release_date: 'Tue, 06/05/2018',
      vote_average: 5.2,
    },
    {
      id: '2',
      original_title: 'Movie 2',
      popularity: 18.12,
      release_date: 'Wed, 07/12/2020',
      vote_average: 6.5,
    },
  ];
  fetchMovies.mockResolvedValue(mockData);

  const result = await fetchMovies();
  expect(result).toEqual(mockData);
});
