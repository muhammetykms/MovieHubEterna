import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {MovieDTO} from '../../data/MoviesDTO';
import {useFavoriteMovies} from '../../context/FavoriteMoviesContext';
import styles from './MovieCard.styles';
import IMAGES from '../../assets';

type MovieCardProps = {
  movie: MovieDTO; // Movie objesi
  handleClick: () => void; // Tıklama olayını yönlendiren fonksiyon
};

const MovieCard: React.FC<MovieCardProps> = ({movie, handleClick}) => {
  const {addFavorite} = useFavoriteMovies(); // Favorilere eklemek için context'ten alıyoruz

  const handleAddToFavorite = () => {
    addFavorite(movie); // Favorilere ekle
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
        {/* Favori ekleme butonunun eski haline döndürülmesi */}
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
