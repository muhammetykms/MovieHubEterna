import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {MovieDTO} from '../../data/MoviesDTO';
import MovieCard from '../../components/MovieCard/MovieCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import {fetchMovies} from '../../services/MovieService';
import {groupMoviesInPairs} from '../../utils/helpers';
import {useTheme} from '../../theme/ThemeProvider';
import styles from './SearchScreen.styles';

const SearchScreen = ({navigation}) => {
  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [query, setQuery] = useState<string>('');
  const {theme} = useTheme(); // Temayı kullanıyoruz

  const handleSearch = (query: string) => {
    setQuery(query);
    if (query.trim().length === 0) {
      setMovies([]);
      return;
    }

    const allMovies = fetchMovies();
    const filteredMovies = allMovies.filter(movie =>
      movie.original_title.toLowerCase().includes(query.toLowerCase()),
    );

    setMovies(filteredMovies);
  };

  const handleClear = () => {
    setMovies([]);
    setQuery('');
  };

  const renderMoviePair = ({item}: {item: MovieDTO[]}) => (
    <View style={styles.row}>
      {item.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          handleClick={() => navigation.navigate('Details', {movie})}
        />
      ))}
    </View>
  );

  const groupedMovies = groupMoviesInPairs(movies);

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <SearchBar onSearch={handleSearch} onClear={handleClear} />

      {query.length > 0 && (
        <Text style={[styles.title, {color: theme.colors.text}]}>
          Search Results for "{query}"
        </Text>
      )}

      <FlatList
        data={groupedMovies}
        renderItem={renderMoviePair}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;
