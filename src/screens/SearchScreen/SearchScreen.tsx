import React, {useState} from 'react';
import {View, Text, FlatList, Pressable, Modal} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieDTO} from '../../data/MoviesDTO';
import MovieCard from '../../components/MovieCard/MovieCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import {fetchMovies} from '../../services/MovieService';
import {useTheme} from '../../theme/ThemeProvider';
import styles from './SearchScreen.styles';

// SearchScreen, film arama ve sıralama işlevlerini sağlar.
const SearchScreen = ({navigation}) => {
  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [query, setQuery] = useState<string>('');
  const [isModalVisible, setModalVisible] = useState(false);
  const {theme} = useTheme();

  // Arama temizlendiğinde filmleri sıfırlar
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
    toggleModal();
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


  // Tarih stringini parse edip alınan fonksiyon
  const sortMoviesByReleaseDate = (order: 'asc' | 'desc') => {
    const allMovies = fetchMovies();

    const sortedMovies = allMovies.sort((a, b) => {
      const dateAString = a.release_date.split(', ')[1];
      const dateBString = b.release_date.split(', ')[1];

      // Reformat the date from MM/DD/YYYY to YYYY-MM-DD
      const reformatDate = (dateStr: string) => {
        const [month, day, year] = dateStr.split('/');
        return `${year}-${month}-${day}`;
      };

      const dateAFormatted = reformatDate(dateAString);
      const dateBFormatted = reformatDate(dateBString);

      const dateA = new Date(dateAFormatted);
      const dateB = new Date(dateBFormatted);

      if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
        console.error('Invalid date format:', dateAString, dateBString);
        return 0;
      }

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

  const groupMoviesInPairs = (movies: MovieDTO[]) => {
    const groupedMovies = [];
    for (let i = 0; i < movies.length; i += 2) {
      groupedMovies.push(movies.slice(i, i + 2));
    }
    return groupedMovies;
  };

  const groupedMovies = groupMoviesInPairs(movies);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <SearchBar
        onSearch={handleSearch}
        onClear={handleClear}
        onFilter={toggleModal}
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
