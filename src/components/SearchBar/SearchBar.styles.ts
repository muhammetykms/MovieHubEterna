import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
  },
  filterText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: '500',
  },
});

export default styles;
