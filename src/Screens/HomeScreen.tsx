import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import axios from 'axios';
import { setProducts } from '../slices/productSlice';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('https://dummyjson.com/products');
      dispatch(setProducts(res.data.products));
    };
    fetchProducts();
  },);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}
