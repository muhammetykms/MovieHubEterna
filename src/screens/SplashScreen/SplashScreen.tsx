import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../theme/ThemeProvider';
import IMAGES from '../../assets';



// SplashScreen, uygulamanın açılış animasyonunu ve yüklenme durumunu gösterir.ƒ
const SplashScreen = () => {
  const navigation = useNavigation();
  const {theme} = useTheme();
  const [loading, setLoading] = useState(true);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Veri yükleme süresi
    setTimeout(() => {
      setLoading(false);
      navigation.replace('Tab');
    }, 3000);

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
        <Image
          source={IMAGES.LOGO}
          style={[styles.logo, {borderColor: theme.colors.primary}]}
        />
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
