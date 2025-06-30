import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ProductCard from '../components/ProductCard';
import useFetchProducts from '../hooks/customhooks/useFetchProducts';

export default function HomeScreen() {
  useFetchProducts(); 

  const products = useSelector((state: RootState) => state.product.products);

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
