
import React from 'react';
import { View, FlatList } from 'react-native';
import { useProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
  const { state } = useProductContext();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={state.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}
