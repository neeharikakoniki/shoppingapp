import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';
import ProductDetails from '../Screens/ProductDetails';
import AddProductScreen from '../Screens/AddProductScreen';
import EditProductScreen from '../Screens/EditProductScreen';
import CartClassComponent from '../components/CartClassComponent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Products" component={HomeStack} />
    <Tab.Screen name="Cart" component={CartClassComponent} />
  </Tab.Navigator>
);

export default function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Shop" component={TabNavigator} />
      <Drawer.Screen name="Add Product" component={AddProductScreen} />
      <Drawer.Screen name="Edit Product" component={EditProductScreen} />
    </Drawer.Navigator>
  );
}
