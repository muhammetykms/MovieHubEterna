import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  profileImage: {
    width: '100%',
    height: 300,
    borderRadius: 150,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  character: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  popularity: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  additionalInfo: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 20,
  },
});

export default styles;
