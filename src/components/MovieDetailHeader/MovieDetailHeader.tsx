import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {MovieDTO} from '../../data/MoviesDTO';
import {useTheme} from '../../theme/ThemeProvider'; // Importing theme
import styles from './MovieDetailHeader.styles';

type MovieDetailHeaderProps = {
  movie: MovieDTO;
};

const MovieDetailHeader: React.FC<MovieDetailHeaderProps> = ({movie}) => {
  const {theme} = useTheme(); // Getting the current theme

  return (
    <View
      style={[styles.header, {backgroundColor: theme.colors.cardBackground}]}>
      <Image source={{uri: movie.backdrop_path}} style={styles.backdrop} />
      <Text style={[styles.title, {color: theme.colors.text}]}>
        {movie.original_title}
      </Text>
      <Text style={[styles.releaseDate, {color: theme.colors.text}]}>
        Çıkış Tarihi: {movie.release_date}
      </Text>
      <Text style={[styles.overview, {color: theme.colors.text}]}>
        {movie.overview}
      </Text>
      <Text style={[styles.voteAverage, {color: theme.colors.primary}]}>
        IMDB Skoru: {movie.vote_average}
      </Text>
    </View>
  );
};

export default MovieDetailHeader;
