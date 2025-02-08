// CastDetailScreen, bir oyuncunun detaylı bilgilerini gösterir.
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';
import styles from './CastDetailScreen.styles';

type CastDetailScreenProps = {
  route: {params: {cast: any; movieTitle: string}};
};

const CastDetailScreen: React.FC<CastDetailScreenProps> = ({route}) => {
  const {cast, movieTitle} = route.params;
  const {theme} = useTheme();

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={styles.header}>
        <Image source={{uri: cast.profile_path}} style={styles.profileImage} />
        <Text style={[styles.name, {color: theme.colors.text}]}>
          {cast.name}
        </Text>
      </View>

      <View
        style={[
          styles.details,
          {backgroundColor: theme.colors.cardBackground},
        ]}>
        <Text style={[styles.detailTitle, {color: theme.colors.primary}]}>
          Oynadığı Film:
        </Text>
        <Text style={[styles.detailText, {color: theme.colors.text}]}>
          {movieTitle}
        </Text>

        <Text style={[styles.detailTitle, {color: theme.colors.primary}]}>
          Karakter:
        </Text>
        <Text style={[styles.detailText, {color: theme.colors.text}]}>
          {cast.character}
        </Text>

        <Text style={[styles.detailTitle, {color: theme.colors.primary}]}>
          Puan:
        </Text>
        <Text style={[styles.detailText, {color: theme.colors.text}]}>
          {cast.popularity}
        </Text>
      </View>

      <Text style={[styles.additionalInfo, {color: theme.colors.text}]}>
        Ekstra Bilgi Yakında...
      </Text>
    </ScrollView>
  );
};

export default CastDetailScreen;
