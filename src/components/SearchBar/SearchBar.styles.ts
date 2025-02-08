import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: width * 0.03,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: width * 0.03,
  },
  input: {
    flex: 1,
    height: width * 0.1,
    paddingLeft: width * 0.03,
    fontSize: width * 0.04,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  filterButton: {
    marginLeft: width * 0.03,
    padding: width * 0.03,
  },
  filterText: {
    fontSize: width * 0.04,
    color: '#007BFF',
    fontWeight: '500',
  },
});

export default styles;
