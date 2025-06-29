import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function AddProductScreen() {
  const [title, setTitle] = useState('');

  const addProduct = async () => {
    const res = await axios.post('https://dummyjson.com/products/add', {
      title,
    });
    console.log(res.data);
  };

  return (
    <View>
      <TextInput placeholder="Enter title" value={title} onChangeText={setTitle} />
      <Button title="Add Product" onPress={addProduct} />
    </View>
  );
}
