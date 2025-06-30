
import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/types';

type StateType = {
  products: Product[];
  cart: Product[];
};

const initialState: StateType = {
  products: [],
  cart: [],
};

const ProductContext = createContext<any>(null);

const reducer = (state: StateType, action: any): StateType => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };

    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'LOAD_CART':
      return { ...state, cart: action.payload };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts();
    loadCart();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products');
      dispatch({ type: 'SET_PRODUCTS', payload: res.data.products });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const loadCart = async () => {
    try {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(storedCart) });
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  const addToCart = async (product: Product) => {
    try {
      const updatedCart = [...state.cart, product];
      dispatch({ type: 'ADD_TO_CART', payload: product });
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (id: number) => {
    try {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        loadCart,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => React.useContext(ProductContext);
