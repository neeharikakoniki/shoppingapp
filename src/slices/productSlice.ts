// slices/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/types';

interface ProductState {
  products: Product[];
  cart: Product[];
}

const initialState: ProductState = {
  products: [],
  cart: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    addToCart(state, action: PayloadAction<Product>) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(p => p.id !== action.payload);
    },
    loadCart(state, action: PayloadAction<Product[]>) {
      state.cart = action.payload;
    },
  },
});

export const { setProducts, addToCart, removeFromCart, loadCart } = productSlice.actions;
export default productSlice.reducer;
