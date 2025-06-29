import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function EditProductScreen() {
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');

  const editProduct = async () => {
    const res = await axios.put(`https://dummyjson.com/products/${id}`, {
      title,
    });
    console.log(res.data);
  };

  return (
    <View>
      <TextInput placeholder="ID" value={id} onChangeText={setId} />
      <TextInput placeholder="New Title" value={title} onChangeText={setTitle} />
      <Button title="Update Product" onPress={editProduct} />
    </View>
  );
}
