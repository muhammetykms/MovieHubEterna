// components/HeaderMovieCard.tsx
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {MovieDTO} from '../../data/MoviesDTO';
import {useTheme} from '../../theme/ThemeProvider'; // Tema import ediyoruz
import styles from './HeaderMovieCard.styles';

type HeaderMovieCardProps = {
  movie: MovieDTO;
  handleClick: () => void;
};

const HeaderMovieCard: React.FC<HeaderMovieCardProps> = ({
  movie,
  handleClick,
}) => {
  const {theme} = useTheme(); // Tema contexti alıyoruz

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View
        style={[styles.card, {backgroundColor: theme.colors.cardBackground}]}>
        <Image source={{uri: movie.backdrop_path}} style={styles.poster} />
        <Text style={[styles.title, {color: theme.colors.text}]}>
          {movie.original_title}
        </Text>
        <Text style={[styles.rating, {color: theme.colors.cardText}]}>
          IMDB: {movie.vote_average}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HeaderMovieCard;
