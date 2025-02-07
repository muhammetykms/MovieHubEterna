import React, {useState} from 'react';
import {View, Text, FlatList, Pressable, Modal, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
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
  const [isModalVisible, setModalVisible] = useState(false);
  const {theme} = useTheme();

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

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleFilter = (orderType: string, sortBy: string) => {
    if (sortBy === 'rating') {
      sortMoviesByRating(orderType);
    } else if (sortBy === 'releaseDate') {
      sortMoviesByReleaseDate(orderType);
    }
    toggleModal(); // Modal'ı kapat
  };

  const sortMoviesByRating = (order: 'asc' | 'desc') => {
    const allMovies = fetchMovies();
    const sortedMovies = allMovies.sort((a, b) => {
      if (order === 'desc') {
        return b.vote_average - a.vote_average;
      } else {
        return a.vote_average - b.vote_average;
      }
    });
    setMovies(sortedMovies);
  };

  const sortMoviesByReleaseDate = (order: 'asc' | 'desc') => {
    const allMovies = fetchMovies();
    const sortedMovies = allMovies.sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);

      if (order === 'desc') {
        return dateB.getTime() - dateA.getTime();
      } else {
        return dateA.getTime() - dateB.getTime();
      }
    });
    setMovies(sortedMovies);
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
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <SearchBar
        onSearch={handleSearch}
        onClear={handleClear}
        onFilter={toggleModal} // Filtre butonuna basıldığında modal'ı aç
      />

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

      {/* Filtre Modal'ı */}
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={toggleModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Sırala</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => handleFilter('desc', 'rating')}>
              <Text style={styles.modalButtonText}>
                Puan (Yüksekten Düşüğe)
              </Text>
            </Pressable>
            <Pressable
              style={styles.modalButton}
              onPress={() => handleFilter('asc', 'rating')}>
              <Text style={styles.modalButtonText}>
                Puan (Düşükten Yükseğe)
              </Text>
            </Pressable>
            <Pressable
              style={styles.modalButton}
              onPress={() => handleFilter('desc', 'releaseDate')}>
              <Text style={styles.modalButtonText}>
                Yayınlanma Tarihi (En Yeni İlk)
              </Text>
            </Pressable>
            <Pressable
              style={styles.modalButton}
              onPress={() => handleFilter('asc', 'releaseDate')}>
              <Text style={styles.modalButtonText}>
                Yayınlanma Tarihi (En Eski İlk)
              </Text>
            </Pressable>
            <Pressable style={styles.modalCloseButton} onPress={toggleModal}>
              <Text style={styles.modalCloseButtonText}>Kapat</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SearchScreen;
