import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage'ı import ediyoruz
import styles from './ProfileEditScreen.styles'; // Tasarımlar bu dosyaya taşındı

const ProfileEditScreen = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
  });

  // AsyncStorage'dan kullanıcı profil bilgilerini yükleme
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const storedUserProfile = await AsyncStorage.getItem('userProfile');
        if (storedUserProfile) {
          const parsedProfile = JSON.parse(storedUserProfile);
          setUserProfile(parsedProfile);
          console.log('Loaded profile from AsyncStorage:', parsedProfile);
        }
      } catch (error) {
        console.error('Failed to load profile:', error);
      }
    };

    loadProfile();
  }, []);

  const handleSaveProfile = async () => {
    if (!userProfile.name || !userProfile.email) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }

    // AsyncStorage'a kaydetme
    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(userProfile));
      console.log('Profile saved to AsyncStorage:', userProfile);

      // Profil düzenleme sayfasına geri git
      navigation.goBack();
    } catch (error) {
      console.error('Profile could not be saved to AsyncStorage:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        {/* Profil Bilgileri */}
        <TextInput
          style={styles.input}
          placeholder="İsim"
          value={userProfile.name}
          onChangeText={text => setUserProfile({...userProfile, name: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          value={userProfile.email}
          onChangeText={text => setUserProfile({...userProfile, email: text})}
        />

        <TouchableOpacity onPress={handleSaveProfile} style={styles.editButton}>
          <Text style={styles.editButtonText}>Profili Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileEditScreen;
