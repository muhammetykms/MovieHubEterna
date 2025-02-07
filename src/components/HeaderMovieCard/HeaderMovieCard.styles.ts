// components/HeaderMovieCard/HeaderMovieCard.styles.ts
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    width: width - 20,
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  poster: {
    width: '100%',
    height: 350,
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fff',
    zIndex: 2,
    position: 'absolute',
    bottom: 30,
    left: '5%',
  },
  rating: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    zIndex: 2,
    position: 'absolute',
    bottom: 10,
    left: '5%',
  },
});

export default styles;
