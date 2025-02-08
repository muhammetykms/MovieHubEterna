import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.04,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: width * 0.06,
  },
  userName: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: width * 0.02,
  },
  userEmail: {
    fontSize: width * 0.04,
    marginBottom: width * 0.04,
  },
  editButton: {
    paddingHorizontal: width * 0.06,
    paddingVertical: width * 0.02,
    backgroundColor: '#007BFF',
    borderRadius: 20,
    marginTop: width * 0.04,
  },
  editButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  section: {
    marginBottom: width * 0.06,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width * 0.04,
  },
  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: '600',
  },
  movieItem: {
    marginRight: width * 0.04,
    width: width * 0.3,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: width * 0.02,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  moviePoster: {
    width: '100%',
    height: width * 0.4,
    borderRadius: 8,
  },
  movieTitle: {
    fontSize: width * 0.035,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
    marginTop: width * 0.02,
    flexWrap: 'wrap',
  },
});

export default styles;
