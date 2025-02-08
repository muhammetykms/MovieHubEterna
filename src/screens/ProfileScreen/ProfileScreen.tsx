// src/screens/ProfileScreen.tsx
// Kullanıcının profil bilgilerini ve favori filmlerini gösteren ekran
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';
import {MovieDTO} from '../../data/MoviesDTO';
import {loadFavoriteMovies, loadUserProfile} from '../../utils/storage';
import styles from './ProfileScreen.styles';

// ProfileScreen, kullanıcının profil bilgilerini ve favori filmlerini gösterir.
const ProfileScreen = ({navigation}) => {
  const {theme} = useTheme();
  const [favoriteMovies, setFavoriteMovies] = useState<MovieDTO[]>([]);
  const [userProfile, setUserProfile] = useState({name: '', email: ''});
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    setRefreshing(true);
    const movies = await loadFavoriteMovies();
    if (movies) setFavoriteMovies(movies);
    const profile = await loadUserProfile();
    if (profile) setUserProfile(profile);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderMovieItem = ({item}: {item: MovieDTO}) => (
    <View
      style={[
        styles.movieItem,
        {backgroundColor: theme.colors.cardBackground},
      ]}>
      <Image source={{uri: item.poster_path}} style={styles.moviePoster} />
      <Text style={[styles.movieTitle, {color: theme.colors.text}]}>
        {item.original_title}
      </Text>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
        }>
        <View style={styles.container}>
          <View style={styles.profileHeader}>
            <Text style={[styles.userName, {color: theme.colors.text}]}>
              {userProfile.name || 'Adınız'}{' '}
            </Text>
            <Text style={[styles.userEmail, {color: theme.colors.text}]}>
              {userProfile.email || 'E-posta adresiniz'}{' '}
            </Text>
            <TouchableOpacity
              style={[
                styles.editButton,
                {backgroundColor: theme.colors.primary},
              ]}
              onPress={() => navigation.navigate('ProfileEdit')}>
              <Text
                style={[
                  styles.editButtonText,
                  {color: theme.colors.textOnPrimary},
                ]}>
                Profili Düzenle
              </Text>
            </TouchableOpacity>
          </View>

          {/* Favori Filmler */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, {color: theme.colors.text}]}>
                Favori Filmler
              </Text>
            </View>
            <FlatList
              data={favoriteMovies}
              renderItem={renderMovieItem}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
