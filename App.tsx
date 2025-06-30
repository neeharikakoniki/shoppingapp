import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { ProductProvider } from './src/context/ProductContext'; 
import AppNavigator from './src/navigation/AppNavigator';

import { Provider } from 'react-redux';
import { store } from './src/app/store';

const App = () => {
  return (
    // <ProductProvider> 
    <Provider store={store}> 
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
    // </ProductProvider> 
  );
};

export default App;
