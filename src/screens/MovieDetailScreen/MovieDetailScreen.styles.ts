import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.03,
  },
  castTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: width * 0.03,
  },
  shareButton: {
    backgroundColor: '#007BFF',
    padding: width * 0.03,
    borderRadius: 5,
    marginBottom: width * 0.05,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});

export default styles;
