import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {MovieDTO} from '../data/MoviesDTO';

type MovieCardProps = {
  movie: MovieDTO; // Movie objesi
  handleClick: () => void; // Tıklama olayını yönlendiren fonksiyon
};

const MovieCard: React.FC<MovieCardProps> = ({movie, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={styles.card}>
        <Image source={{uri: movie.poster_path}} style={styles.poster} />
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.rating}>IMDB: {movie.vote_average}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 2},
    marginBottom: 15,
    width: 180,
  },
  poster: {
    width: 180,
    height: 270,
    borderRadius: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  rating: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
});

export default MovieCard;
