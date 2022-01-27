import React from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import ProductCard from './components/ProductCard/';
import SearchBar from './components/SearchBar';
import products from './products.json';

const App = () => {
  const renderProducts = product => <ProductCard data={product} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PatikaStore</Text>
      <SearchBar />
      <FlatList
        numColumns={2}
        keyExtractor={product => product.id.toString()}
        data={products}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default App;
