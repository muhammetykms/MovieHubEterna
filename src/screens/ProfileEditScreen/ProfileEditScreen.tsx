import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTheme} from '../../theme/ThemeProvider';
import styles from './ProfileEditScreen.styles';

// ProfileEditScreen, kullanıcının profil bilgilerini düzenlemesini sağlar.
const ProfileEditScreen = ({navigation}) => {
  const {theme} = useTheme();
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
  });

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

    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(userProfile));
      console.log('Profil AsyncStorage a kaydedildi:', userProfile);
      navigation.goBack();
    } catch (error) {
      console.error('Profil AsyncStorage a kaydedilemedi:', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollViewContent}
          resetScrollToCoords={{x: 0, y: 0}}
          scrollEnabled={true}>
          <View style={styles.formContainer}>
            <TextInput
              style={[
                styles.input,
                {color: theme.colors.text, borderColor: theme.colors.primary},
              ]}
              placeholder="İsim"
              placeholderTextColor={theme.colors.placeholder}
              value={userProfile.name}
              onChangeText={text =>
                setUserProfile({...userProfile, name: text})
              }
            />
            <TextInput
              style={[
                styles.input,
                {color: theme.colors.text, borderColor: theme.colors.primary},
              ]}
              placeholder="E-posta"
              placeholderTextColor={theme.colors.placeholder}
              value={userProfile.email}
              onChangeText={text =>
                setUserProfile({...userProfile, email: text})
              }
            />
            <TouchableOpacity
              onPress={handleSaveProfile}
              style={[
                styles.editButton,
                {backgroundColor: theme.colors.primary},
              ]}>
              <Text
                style={[
                  styles.editButtonText,
                  {color: theme.colors.textOnPrimary},
                ]}>
                Profili Kaydet
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ProfileEditScreen;
