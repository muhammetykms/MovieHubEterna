import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginRight: width * 0.04,
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
    marginBottom: width * 0.02,
  },
  name: {
    fontSize: width * 0.035,
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
