import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../types/types';
// import { useProductContext } from '../context/ProductContext';
import { useAppDispatch } from '../hooks/reduxHooks';
import { addToCart } from '../slices/productSlice';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="View"
          onPress={() => navigation.navigate('ProductDetails', { id: product.id })}
        />
        <Button title="Add to Cart" color="green" onPress={handleAddToCart} />
      </View>
    </View>
  );
}


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
