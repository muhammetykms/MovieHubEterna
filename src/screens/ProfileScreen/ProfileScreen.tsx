import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';
import {MovieDTO} from '../../data/MoviesDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './ProfileScreen.styles';

const ProfileScreen = () => {
  const {theme} = useTheme();
  const [favoriteMovies, setFavoriteMovies] = useState<MovieDTO[]>([]);

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

    loadFavoriteMovies();
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
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        {/* Profil Bilgileri */}
        <View style={styles.profileHeader}>
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={styles.profileImage}
          />
          <Text style={[styles.userName, {color: theme.colors.text}]}>
            John Doe
          </Text>
          <Text style={[styles.userEmail, {color: theme.colors.text}]}>
            johndoe@example.com
          </Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Profili Düzenle</Text>
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
            data={favoriteMovies} // Use the state to display favorite movies
            renderItem={renderMovieItem}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Diğer Bilgiler */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, {color: theme.colors.text}]}>
              Hesap Ayarları
            </Text>
          </View>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={[styles.settingText, {color: theme.colors.text}]}>
              Şifre Değiştir
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={[styles.settingText, {color: theme.colors.text}]}>
              Çıkış Yap
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
