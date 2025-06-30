import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function AddProductScreen() {
  const [title, setTitle] = useState('');
  const navigation = useNavigation();

  const addProduct = async () => {
    try {
      const res = await axios.post('https://dummyjson.com/products/add', {
        title,
      });
      Alert.alert('Added New Product');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to add product');
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Enter title" value={title} onChangeText={setTitle} />
      <Button title="Add Product" onPress={addProduct} />
    </View>
  );
}
