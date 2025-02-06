import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  header: {
    alignItems: 'center',
  },
  backdrop: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  releaseDate: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 5,
  },
  overview: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  voteAverage: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  castTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default styles;
