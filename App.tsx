import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProductProvider } from './context/ProductContext';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <ProductProvider> {}
      <NavigationContainer>
        <AppNavigator /> {}
      </NavigationContainer>
    </ProductProvider>
  );
};

export default App;
