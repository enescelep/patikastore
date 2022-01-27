import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
  },
  container: {
    backgroundColor: '#e0e0e0',
    margin: 10,
    borderRadius: 10,
    flex: 1,
    padding: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    padding: 5,
  },
  out_of_stock: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    padding: 5,
  },
});
