import React, { forwardRef, useImperativeHandle } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = forwardRef(({ title, onPress }: any, ref) => {
  useImperativeHandle(ref, () => ({
    shake: () => alert('Button shaken!'),
  }));

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomButton;
function alert(arg0: string): any {
    throw new Error('Function not implemented.');
}

