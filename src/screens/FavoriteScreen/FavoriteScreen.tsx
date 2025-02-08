import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  removeFavorite,
  addFavorite,
} from '../../redux/slices/favoriteMoviesSlice';
import {RootState} from '../../redux/store';
import {useTheme} from '../../theme/ThemeProvider';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import styles from './FavoriteScreen.styles';
import {MovieDTO} from '../../data/MoviesDTO';


// FavoriteScreen, kullanıcının favori filmlerini listeleyen ekrandır.
const FavoriteScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(
    (state: RootState) => state.favoriteMovies.favoriteMovies,
  );
  const {theme} = useTheme();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleAddFavorite = (movie: MovieDTO) => dispatch(addFavorite(movie));
  const handleRemoveFavorite = (movieId: number) =>
    dispatch(removeFavorite(movieId));

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const renderItem = ({item}: {item: MovieDTO}) => (
    <View style={[styles.card, {backgroundColor: theme.colors.cardBackground}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {movie: item})}
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
        <Text style={styles.removeButtonText}>Sil</Text>
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
          Henüz favori film eklemediniz!
        </Text>
      )}
    </SafeAreaView>
  );
};

export default FavoriteScreen;
