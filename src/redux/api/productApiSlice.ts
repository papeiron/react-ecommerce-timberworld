import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:3004';

export type Product = {
  id: number;
  productName: string;
  brand: string;
  price: string;
  category: string;
  description: string;
  texture: string;
  weight: string;
  size: string;
  img: string[];
};

export const productApiSlice = createApi({
  reducerPath: 'productApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => 'products'
    }),
    fetchProduct: builder.query<Product, number>({
      query: (id) => `products/${id}`
    })
  })
});

export const { useFetchProductsQuery, useFetchProductQuery } = productApiSlice;
