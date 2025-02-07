import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 2},
    marginBottom: 15,
    width: 180,
  },
  poster: {
    width: 180,
    height: 270,
    borderRadius: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  rating: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  favoriteButton: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#6200ee',
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  favoriteButtonText: {
    color: 'white',
  },
});

export default styles;
