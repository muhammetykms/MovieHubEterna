import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: width * 0.02,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 2},
    marginBottom: width * 0.04,
    width: width / 2 - 20,
  },
  poster: {
    width: '100%',
    height: width * 0.6,
    borderRadius: 15,
  },
  title: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  rating: {
    fontSize: width * 0.03,
    color: '#888',
    marginBottom: 10,
  },
  favoriteButton: {
    fontSize: width * 0.03,
    color: '#fff',
    backgroundColor: '#6200ee',
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  favoriteButtonText: {
    color: 'white',
  },
});

export default styles;
