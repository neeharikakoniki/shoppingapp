import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useProductContext } from '../context/ProductContext';
import { Product } from '../types/types';

type Props = {
  product: Product;
};

const ProductCard = forwardRef(({ product }: Props, ref) => {
  const navigation = useNavigation<any>();
  const { addToCart } = useProductContext();
  const localRef = useRef(null);

  useImperativeHandle(ref, () => ({
    logProductId: () => console.log(`Product ID: ${product.id}`),
  }));

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="View"
          onPress={() => navigation.navigate('ProductDetails', { id: product.id })}
        />
        <Button title="Add to Cart" color="green" onPress={() => addToCart(product)} />
      </View>
    </View>
  );
});

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 14,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
