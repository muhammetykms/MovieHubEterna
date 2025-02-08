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
    height: width * 0.6,
    borderRadius: 15,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fff',
    zIndex: 2,
    position: 'absolute',
    bottom: width * 0.1,
    left: '5%',
  },
  rating: {
    fontSize: width * 0.04,
    color: '#fff',
    marginBottom: 10,
    zIndex: 2,
    position: 'absolute',
    bottom: width * 0.02,
    left: '5%',
  },
});

export default styles;
