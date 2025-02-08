import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    padding: width * 0.05,
    borderRadius: 10,
    position: 'relative',
  },
  backdrop: {
    width: '100%',
    height: width * 0.5,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  releaseDate: {
    fontSize: width * 0.04,
    marginBottom: 5,
  },
  overview: {
    fontSize: width * 0.035,
    marginBottom: 10,
  },
  voteAverage: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  shareButton: {
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareIcon: {
    width: width * 0.05,
    height: width * 0.05,
  },
});

export default styles;
