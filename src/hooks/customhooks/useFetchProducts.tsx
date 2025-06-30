import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../../slices/productSlice';
import { Product } from '../../types/types';

const useFetchProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products');
        const products: Product[] = res.data.products;
        dispatch(setProducts(products));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);
};

export default useFetchProducts;
