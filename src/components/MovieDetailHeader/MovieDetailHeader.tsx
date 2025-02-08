import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {MovieDTO} from '../../data/MoviesDTO';
import {useTheme} from '../../theme/ThemeProvider'; // Importing theme
import IMAGES from '../../assets'; // IMAGES nesnesini import ettik
import Share from 'react-native-share'; // Paylaşma modülünü içeri aktar
import styles from './MovieDetailHeader.styles';

type MovieDetailHeaderProps = {
  movie: MovieDTO;
};

const MovieDetailHeader: React.FC<MovieDetailHeaderProps> = ({movie}) => {
  const {theme} = useTheme(); // Getting the current theme

  const shareMovie = async () => {
    const shareOptions = {
      title: 'Film Paylaş',
      message: `Filmin Adını Paylaşmak İster misiniz? ${movie.original_title}`,
      url: '', // URL eklemek isterseniz burada paylaşılacak bir link verebilirsiniz
    };

    try {
      await Share.open(shareOptions); // Paylaşımı başlat
    } catch (error) {
      console.log('Paylaşım hatası:', error);
    }
  };

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

      <View style={styles.footer}>
        <Text style={[styles.voteAverage, {color: theme.colors.primary}]}>
          IMDB Skoru: {movie.vote_average}
        </Text>

        {/* Paylaşma Butonu */}
        <TouchableOpacity
          onPress={shareMovie}
          style={[
            styles.shareButton,
            {backgroundColor: theme.colors.buttonBackground},
          ]}>
          <Image
            source={IMAGES.SHARE}
            style={[styles.shareIcon, {tintColor: theme.colors.iconColor}]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieDetailHeader;
