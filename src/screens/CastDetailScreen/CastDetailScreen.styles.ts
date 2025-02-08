import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: '#f2f2f2',
  },
  header: {
    alignItems: 'center',
    marginBottom: width * 0.08,
    marginTop: width * 0.05,
  },
  profileImage: {
    width: width * 0.45,
    height: width * 0.45,
    borderRadius: width * 0.225,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  name: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: width * 0.03,
    textAlign: 'center',
  },
  details: {
    borderRadius: 10,
    padding: width * 0.05,
    marginBottom: width * 0.08,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  detailTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: width * 0.02,
  },
  detailText: {
    fontSize: width * 0.04,
    marginBottom: width * 0.04,
  },
  additionalInfo: {
    fontSize: width * 0.035,
    textAlign: 'center',
    marginTop: width * 0.05,
    fontStyle: 'italic',
  },
});

export default styles;
