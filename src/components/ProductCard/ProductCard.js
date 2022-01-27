import React from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({data}) => {
  //console.log(data.item.imgURL);
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: data.item.imgURL}} />
      <Text style={styles.title}>{data.item.title}</Text>
      <Text style={styles.price}>{data.item.price}</Text>
      {!data.item.inStock && (
        <Text style={styles.out_of_stock}>STOKTA YOK</Text>
      )}
    </SafeAreaView>
  );
};

export default ProductCard;
