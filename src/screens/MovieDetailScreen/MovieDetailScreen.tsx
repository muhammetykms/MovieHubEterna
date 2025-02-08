import React from 'react';
import {Text, ScrollView, FlatList} from 'react-native';
import {MovieDTO} from '../../data/MoviesDTO';
import {useTheme} from '../../theme/ThemeProvider';
import {SafeAreaView} from 'react-native-safe-area-context';
import CastCard from '../../components/CastCard/CastCard';
import MovieDetailHeader from '../../components/MovieDetailHeader/MovieDetailHeader';
import styles from './MovieDetailScreen.styles';

type MovieDetailScreenProps = {
  route: {params: {movie: MovieDTO}};
  navigation: any;
};

// MovieDetailScreen, filmin detaylarını ve oyuncuları gösterir.
const MovieDetailScreen: React.FC<MovieDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const {movie} = route.params;
  const {theme} = useTheme();

  const renderCastCard = ({item}) => (
    <CastCard
      name={item.name}
      profilePath={item.profile_path}
      onPress={() =>
        navigation.navigate('CastDetail', {
          cast: item,
          movieTitle: movie.original_title,
        })
      }
    />
  );

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <ScrollView style={{flex: 1}}>
        <MovieDetailHeader movie={movie} />
        <Text style={[styles.castTitle, {color: theme.colors.text}]}>Cast</Text>
        <FlatList
          horizontal
          data={movie.casts}
          renderItem={renderCastCard}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
