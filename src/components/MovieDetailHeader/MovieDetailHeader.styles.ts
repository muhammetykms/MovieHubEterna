import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
    padding: 15,
  },
  backdrop: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
  },
  overview: {
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'left',
    lineHeight: 22,
  },
  voteAverage: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default styles;
