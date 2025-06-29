
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function ProductDetails() {
  const [product, setProduct] = useState<any>(null);
  const route = useRoute<any>();
  const navigation = useNavigation();
  const { id } = route.params;

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://dummyjson.com/products/${id}`);
      Alert.alert('Deleted', 'Product has been deleted');
      navigation.goBack(); 
    } catch (error) {
      console.error('Delete failed:', error);
      Alert.alert('Error', 'Failed to delete product');
    }
  };

  if (!product) return (
    <View> 
      <Text>Loading...</Text> 
    </View>
  );

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Delete Product" color="red" onPress={handleDelete} />
      </View>
    </View>
  );
}
