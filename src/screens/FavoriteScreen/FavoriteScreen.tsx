import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieDTO} from '../../data/MoviesDTO';
import {useFavoriteMovies} from '../../context/FavoriteMoviesContext';
import {useTheme} from '../../theme/ThemeProvider'; // Tema context'ini import ediyoruz
import styles from './FavoriteScreen.styles';

const FavoriteScreen = ({navigation}) => {
  const {favoriteMovies, removeFavorite} = useFavoriteMovies(); // Favorileri context'ten alıyoruz
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {theme} = useTheme(); // Tema bilgilerini alıyoruz

  const navigateToMovieDetails = (movie: MovieDTO) => {
    navigation.navigate('Details', {movie});
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false); // Refresh işlemi sonlandı
    }, 1000);
  };

  const handleRemoveFavorite = (movieId: number) => {
    removeFavorite(movieId); // Favorilerden filmi çıkarıyoruz
  };

  const renderItem = ({item}: {item: MovieDTO}) => (
    <View style={[styles.card, {backgroundColor: theme.colors.cardBackground}]}>
      <TouchableOpacity
        onPress={() => navigateToMovieDetails(item)}
        style={styles.cardContent}>
        <Image source={{uri: item.poster_path}} style={styles.poster} />
        <View style={styles.textContainer}>
          <Text style={[styles.movieTitle, {color: theme.colors.text}]}>
            {item.original_title}
          </Text>
          <Text style={[styles.movieOverview, {color: theme.colors.text}]}>
            {item.overview.slice(0, 100)}...
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleRemoveFavorite(item.id)}
        style={[styles.removeButton, {backgroundColor: theme.colors.primary}]}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text style={[styles.title, {color: theme.colors.text}]}>
        Favori Filmler
      </Text>

      {favoriteMovies.length > 0 ? (
        <FlatList
          data={favoriteMovies}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <Text style={[styles.emptyMessage, {color: theme.colors.text}]}>
          No favorite movies added yet!
        </Text>
      )}
    </SafeAreaView>
  );
};

export default FavoriteScreen;
