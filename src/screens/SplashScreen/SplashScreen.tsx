import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../theme/ThemeProvider'; // Tema sağlayıcıyı içeri aktar
import IMAGES from '../../assets';

const SplashScreen = () => {
  const navigation = useNavigation();
  const {theme} = useTheme(); // Kullanıcı temasını al
  const [loading, setLoading] = useState(true); // Veri yükleniyor durumu
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Simüle edilen veri yükleme süresi
    setTimeout(() => {
      setLoading(false); // Veri yüklemesi tamamlandı
      navigation.replace('Tab'); // Ana ekrana yönlendir
    }, 3000); // 3 saniye bekle

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, navigation]);

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Animated.View style={{opacity: fadeAnim, alignItems: 'center'}}>
        {/* Logo */}
        <Image
          source={IMAGES.LOGO}
          style={[styles.logo, {borderColor: theme.colors.primary}]}
        />
        {/* Yükleniyor yazısını logonun altında ve ortada hizala */}
        <Text style={[styles.text, {color: theme.colors.text}]}>
          {loading ? 'Yükleniyor...' : 'Uygulamanız Başlıyor...'}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 5,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SplashScreen;
