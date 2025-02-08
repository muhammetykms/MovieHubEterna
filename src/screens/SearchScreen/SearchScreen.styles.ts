import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: width * 0.03,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: width * 0.03,
  },
  row: {
    flexDirection: 'row',
    marginBottom: width * 0.05,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: width * 0.7,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: width * 0.04,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: width * 0.045,
    fontWeight: '600',
    marginBottom: width * 0.04,
    color: '#333',
  },
  modalButton: {
    width: '100%',
    padding: width * 0.03,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: width * 0.02,
    backgroundColor: '#f0f0f0',
  },
  modalButtonText: {
    color: '#333',
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  modalCloseButton: {
    width: '100%',
    padding: width * 0.03,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: width * 0.02,
    backgroundColor: '#e0e0e0',
  },
  modalCloseButtonText: {
    color: '#333',
    fontSize: width * 0.035,
    fontWeight: '500',
  },
});

export default styles;
