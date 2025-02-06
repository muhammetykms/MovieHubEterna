import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, RefreshControl} from 'react-native';
import {MovieDTO} from '../../data/MoviesDTO';
import MovieCard from '../../components/MovieCard/MovieCard';
import {useFavoriteMovies} from '../../context/FavoriteMoviesContext';

const FavoriteScreen = ({navigation}) => {
  const {favoriteMovies} = useFavoriteMovies(); // Favorileri context'ten alıyoruz
  const [isRefreshing, setIsRefreshing] = useState(false);

  console.log('Favorite Movies:', favoriteMovies); // Konsolda favori filmleri kontrol ediyoruz

  const navigateToMovieDetails = (movie: MovieDTO) => {
    navigation.navigate('Details', {movie});
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false); // Refresh işlemi sonlandı
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favori Filmler</Text>

      {favoriteMovies.length > 0 ? (
        <FlatList
          data={favoriteMovies}
          renderItem={({item}) => (
            <MovieCard
              key={item.id}
              movie={item}
              handleClick={() => navigateToMovieDetails(item)}
            />
          )}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <Text style={styles.emptyMessage}>No favorite movies added yet!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  emptyMessage: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FavoriteScreen;
