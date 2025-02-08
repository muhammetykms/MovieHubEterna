import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';
import {MovieDTO} from '../../data/MoviesDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './ProfileScreen.styles';

const ProfileScreen = ({navigation}) => {
  const {theme} = useTheme();
  const [favoriteMovies, setFavoriteMovies] = useState<MovieDTO[]>([]);
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const loadFavoriteMovies = async () => {
      try {
        const storedMovies = await AsyncStorage.getItem('favoriteMovies');
        if (storedMovies) {
          setFavoriteMovies(JSON.parse(storedMovies));
        }
      } catch (error) {
        console.error(
          'Error loading favorite movies from AsyncStorage:',
          error,
        );
      }
    };

    const loadUserProfile = async () => {
      try {
        const storedUserProfile = await AsyncStorage.getItem('userProfile');
        if (storedUserProfile) {
          const parsedProfile = JSON.parse(storedUserProfile);
          setUserProfile(parsedProfile); // Set user profile from AsyncStorage
        }
      } catch (error) {
        console.error('Error loading user profile from AsyncStorage:', error);
      }
    };

    loadFavoriteMovies();
    loadUserProfile();
  }, []);

  const renderMovieItem = ({item}: {item: MovieDTO}) => (
    <View style={styles.movieItem}>
      <Image source={{uri: item.poster_path}} style={styles.moviePoster} />
      <Text style={[styles.movieTitle, {color: theme.colors.text}]}>
        {item.original_title}
      </Text>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={[
            styles.container,
            {backgroundColor: theme.colors.background},
          ]}>
          {/* Profil Bilgileri - Koyu/Açık Tema Uygulama */}
          <View style={styles.profileHeader}>
            <Text style={[styles.userName, {color: theme.colors.text}]}>
              {userProfile.name || 'Adınız'}
            </Text>
            <Text style={[styles.userEmail, {color: theme.colors.text}]}>
              {userProfile.email || 'E-posta adresiniz'}
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

          {/* Favori Filmler - Koyu/Açık Tema Uygulama */}
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
              contentContainerStyle={{
                backgroundColor: theme.colors.cardBackground,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
