import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {MovieDTO} from '../../data/MoviesDTO';
import CastCard from '../../components/CastCard/CastCard';
import MovieDetailHeader from '../../components/MovieDetailHeader/MovieDetailHeader';
import styles from './MovieDetailScreen.styles';

const {width} = Dimensions.get('window');

type MovieDetailScreenProps = {
  route: {params: {movie: MovieDTO}};
  navigation: any;
};

const MovieDetailScreen: React.FC<MovieDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const movie = route.params.movie;

  const renderCastCard = ({item}) => (
    <CastCard
      name={item.name}
      profilePath={item.profile_path}
      onPress={() => navigation.navigate('CastDetail', {cast: item})}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <MovieDetailHeader movie={movie} />
      <Text style={styles.castTitle}>Cast</Text>
      <FlatList
        horizontal
        data={movie.casts}
        renderItem={renderCastCard}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default MovieDetailScreen;
