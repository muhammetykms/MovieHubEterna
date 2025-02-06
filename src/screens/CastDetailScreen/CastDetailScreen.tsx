import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {CastDTO} from '../../data/MoviesDTO';
import styles from './CastDetailScreen.styles';

type CastDetailScreenProps = {
  route: {params: {cast: CastDTO}};
};

const CastDetailScreen: React.FC<CastDetailScreenProps> = ({route}) => {
  const cast = route.params.cast;

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: cast.profile_path}} style={styles.profileImage} />
      <Text style={styles.name}>{cast.original_name}</Text>
      <Text style={styles.character}>Character: {cast.character}</Text>
      <Text style={styles.popularity}>Popularity: {cast.popularity}</Text>
      <Text style={styles.additionalInfo}>Additional Info Coming Soon...</Text>
    </ScrollView>
  );
};

export default CastDetailScreen;
