import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
  },
  formContainer: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: width * 0.05,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    height: width * 0.12,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: width * 0.03,
    marginBottom: width * 0.04,
  },
  editButton: {
    borderRadius: 10,
    paddingVertical: width * 0.03,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});

export default styles;
