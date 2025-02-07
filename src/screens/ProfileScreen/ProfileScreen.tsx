import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './ProfileScreen.styles';

const ProfileScreen = () => {
  const {theme} = useTheme(); // Tema desteği
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder resmi
    favoriteMovies: [
      {id: 1, title: 'Inception', poster: 'https://via.placeholder.com/100'},
      {id: 2, title: 'Interstellar', poster: 'https://via.placeholder.com/100'},
      {
        id: 3,
        title: 'The Dark Knight',
        poster: 'https://via.placeholder.com/100',
      },
      {
        id: 4,
        title: 'The Dark Knight',
        poster: 'https://via.placeholder.com/100',
      },
    ],
  };

  const renderMovieItem = ({item}) => (
    <View style={styles.movieItem}>
      <Image source={{uri: item.poster}} style={styles.moviePoster} />
      <Text style={[styles.movieTitle, {color: theme.colors.text}]}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      {/* Profil Bilgileri */}
      <View style={styles.profileHeader}>
        <Image
          source={{uri: user.profilePicture}}
          style={styles.profileImage}
        />
        <Text style={[styles.userName, {color: theme.colors.text}]}>
          {user.name}
        </Text>
        <Text style={[styles.userEmail, {color: theme.colors.text}]}>
          {user.email}
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
          <TouchableOpacity>
            <Icon name="chevron-right" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={user.favoriteMovies}
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
          <TouchableOpacity>
            <Icon name="chevron-right" size={24} color={theme.colors.text} />
          </TouchableOpacity>
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
  );
};

export default ProfileScreen;

// Stil Tanımlamaları
