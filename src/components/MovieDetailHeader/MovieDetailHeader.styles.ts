import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    padding: 20,
    borderRadius: 10,
    position: 'relative',
  },
  backdrop: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  overview: {
    fontSize: 14,
    marginBottom: 10,
  },
  voteAverage: {
    fontSize: 16,
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
    width: 20,
    height: 20,
  },
});

export default styles;
