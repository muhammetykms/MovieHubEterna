// MovieCard.tsx
// Bu bileşen anasayfadaki kart yapılarını oluşturur.
import React from 'react';
import {useDispatch} from 'react-redux';
import {addFavorite} from '../../redux/slices/favoriteMoviesSlice';
import styles from './MovieCard.styles';
import IMAGES from '../../assets';
import {TouchableOpacity, View, Text, Image, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const MovieCard = ({movie, handleClick}) => {
  const dispatch = useDispatch();

  const handleAddToFavorite = () => {
    dispatch(addFavorite(movie));
  };

  const cardWidth = width / 2 - 20;
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={[styles.card, {width: cardWidth}]}>
        <Image
          source={movie.poster_path ? {uri: movie.poster_path} : IMAGES.ERROR}
          style={styles.poster}
        />
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.rating}>IMDB: {movie.vote_average}</Text>
        <TouchableOpacity
          onPress={handleAddToFavorite}
          style={styles.favoriteButton}>
          <Text style={styles.favoriteButtonText}>Favori Ekle</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
