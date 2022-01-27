import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.style';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Arama yapin" />
    </View>
  );
};

export default ProductCard;
