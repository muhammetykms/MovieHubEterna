import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeFavorite} from '../../redux/favoriteMoviesSlice';
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

const FavoriteScreen = ({navigation}) => {
  const dispatch = useDispatch(); // Dispatch fonksiyonunu kullanıyoruz
  const favoriteMovies = useSelector(
    (state: RootState) => state.favoriteMovies.favoriteMovies,
  ); // Redux store'dan favori filmleri alıyoruz
  const {theme} = useTheme(); // Tema bilgilerini alıyoruz
  const [isRefreshing, setIsRefreshing] = React.useState(false); // Pull to refresh durumu

  // Film favorilerden silme işlemi
  const handleRemoveFavorite = (movieId: number) => {
    dispatch(removeFavorite(movieId)); // Redux'dan removeFavorite aksiyonunu dispatch ediyoruz
  };

  // OnRefresh fonksiyonu
  const onRefresh = () => {
    setIsRefreshing(true);
    // Simüle edilen veri güncellenmesi için setTimeout kullanılıyor.
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000); // 1 saniye sonra refresh tamamlanacak
  };

  // FlatList renderItem fonksiyonu
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
