import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Sayfanın tam ortasına yerleştirilmesini sağlamak
    alignItems: 'center', // Yatayda ortalama
    padding: 20,
  },
  formContainer: {
    justifyContent: 'center', // İçeriği dikeyde ortalar
    alignItems: 'center', // İçeriği yatayda ortalar
    width: '70%',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Profil resmini yuvarlak yapmak için
    marginBottom: 40,
    borderWidth: 2,
    borderColor: '#ccc', // Profil resminin kenarını çizmek için
    alignSelf: 'center', // Resmi tam ortada yerleştirme
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 30,
    paddingLeft: 10,
    borderRadius: 5,
    width: '100%',
  },
  editButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10, // Butonun yüksekliğini küçültüyoruz
    paddingHorizontal: 25, // Butonun yatay genişliğini küçültüyoruz
    borderRadius: 10, // Kenarlarını yuvarlatıyoruz
    marginTop: 16,
    width: '80%', // Butonun genişliği %80 olacak şekilde ayarlanıyor
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center', // Buton yazısını ortalamak
  },
});

export default styles;
