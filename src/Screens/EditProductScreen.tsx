import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function EditProductScreen() {
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const navigation = useNavigation();

  const editProduct = async () => {
    try {
      const res = await axios.put(`https://dummyjson.com/products/${id}`, {
        title,
      });
      Alert.alert('Item edited');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to edit product');
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="ID" value={id} onChangeText={setId} />
      <TextInput placeholder="New Title" value={title} onChangeText={setTitle} />
      <Button title="Update Product" onPress={editProduct} />
    </View>
  );
}
