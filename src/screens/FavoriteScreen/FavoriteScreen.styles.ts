import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: width * 0.03,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: width * 0.05,
    marginBottom: width * 0.03,
    paddingLeft: width * 0.03,
  },
  emptyMessage: {
    fontSize: width * 0.045,
    color: '#fff',
    textAlign: 'center',
    marginTop: width * 0.05,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    marginBottom: width * 0.04,
    padding: width * 0.03,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  poster: {
    width: width * 0.2,
    height: width * 0.3,
    borderRadius: 5,
    marginRight: width * 0.03,
  },
  textContainer: {
    flex: 1,
  },
  movieTitle: {
    fontSize: width * 0.045,
    color: '#fff',
    fontWeight: 'bold',
  },
  movieOverview: {
    fontSize: width * 0.035,
    color: '#ccc',
    marginTop: width * 0.02,
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: width * 0.015,
    paddingHorizontal: width * 0.04,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: width * 0.02,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
