import React from 'react';
import {useDispatch} from 'react-redux'; // useDispatch import ediyoruz
import {addFavorite} from '../../redux/favoriteMoviesSlice'; // Aksiyonları import ediyoruz
import styles from './MovieCard.styles';
import IMAGES from '../../assets';
import {TouchableOpacity, View, Text, Image} from 'react-native';

const MovieCard = ({movie, handleClick}) => {
  const dispatch = useDispatch(); // Dispatch'i Redux'tan alıyoruz

  const handleAddToFavorite = () => {
    dispatch(addFavorite(movie)); // Redux store'a favori ekliyoruz
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.card}>
        <Image
          source={movie.poster_path ? {uri: movie.poster_path} : IMAGES.ERROR}
          style={styles.poster}
        />
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.rating}>IMDB: {movie.vote_average}</Text>
        <TouchableOpacity
          onPress={handleAddToFavorite}
          style={styles.favoriteButton}>
          <Text style={styles.favoriteButtonText}>Add to Favorite</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
