import React, {useEffect, useState, useRef} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieDTO} from '../../data/MoviesDTO';
import HeaderMovieCard from '../../components/HeaderMovieCard/HeaderMovieCard';
import MovieCard from '../../components/MovieCard/MovieCard';
import Pagination from '../../components/Pagination/Pagination';
import {fetchMovies} from '../../services/MovieService';
import {groupMoviesInPairs} from '../../utils/helpers';
import {useTheme} from '../../theme/ThemeProvider';
import {useDispatch, useSelector} from 'react-redux'; // useDispatch ve useSelector import ediyoruz
import {RootState} from '../../redux/store'; // Redux store'dan erişim
import {addFavorite} from '../../redux/favoriteMoviesSlice'; // Redux aksiyonu
import styles from './HomeScreen.styles';

const {width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [featuredMovies, setFeaturedMovies] = useState<MovieDTO[]>([]);
  const [page, setPage] = useState<number>(1);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const flatListRef = useRef<FlatList>(null);

  const {theme} = useTheme();

  // Redux kullanarak favori filmleri ve aksiyonları alıyoruz
  const favoriteMovies = useSelector(
    (state: RootState) => state.favoriteMovies.favoriteMovies,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const allMovies = await fetchMovies(page);
      setMovies(allMovies);

      const topRatedMovies = allMovies.sort(
        (a, b) => b.vote_average - a.vote_average,
      );
      setFeaturedMovies(topRatedMovies.slice(0, 3));

      setTotalPages(5);
    };

    fetchData();
  }, [page]);

  const navigateToMovieDetails = (movie: MovieDTO) => {
    navigation.navigate('Details', {movie});
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handlePaginationChange = (index: number) => {
    setCurrentFeaturedIndex(index);
    flatListRef.current?.scrollToIndex({index, animated: true});
  };

  const isFavorite = (movieId: number) => {
    return favoriteMovies.some(movie => movie.id === movieId);
  };

  const toggleFavorite = (movie: MovieDTO) => {
    if (!isFavorite(movie.id)) {
      dispatch(addFavorite(movie)); // Redux üzerinden addFavorite aksiyonunu dispatch ediyoruz
    }
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, {backgroundColor: theme.colors.background}]}>
      <FlatList
        style={styles.container}
        ListHeaderComponent={
          <>
            <Text style={[styles.title, {color: theme.colors.text}]}>
              Top 3 Filmler
            </Text>
            <FlatList
              ref={flatListRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={featuredMovies}
              renderItem={({item}) => (
                <View style={{width: width}}>
                  <HeaderMovieCard
                    movie={item}
                    handleClick={() => navigateToMovieDetails(item)}
                    onFavoritePress={() => toggleFavorite(item)} // Pass the function to the card
                  />
                </View>
              )}
              keyExtractor={item => item.id}
              onViewableItemsChanged={({viewableItems}) => {
                if (viewableItems.length > 0) {
                  setCurrentFeaturedIndex(viewableItems[0].index);
                }
              }}
              viewabilityConfig={{itemVisiblePercentThreshold: 50}}
            />

            <Pagination
              items={featuredMovies}
              currentIndex={currentFeaturedIndex}
              onDotPress={handlePaginationChange}
            />
          </>
        }
        data={groupMoviesInPairs(movies)}
        renderItem={({item}) => (
          <View style={styles.row}>
            {item.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                handleClick={() => navigateToMovieDetails(movie)}
              />
            ))}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
