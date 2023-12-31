import { createSlice } from '@reduxjs/toolkit';

export type Collections = {
  title: string;
  text: string;
  img: string[];
};

const initialState: Collections[] = [
  {
    title: 'Wooden World',
    text: 'Towering trees and lush forests create a serene realm, showcasing natures wooden marvels in harmonious coexistence with humanity.',
    img: [
      '/src/assets/img/collections-images/wooden-1.png',
      '/src/assets/img/collections-images/wooden-2.png'
    ]
  },
  {
    title: 'Nordic Simplicity',
    text: 'Discover the essence of Scandinavian design with our Nordic Charm collection. Celebrating simplicity, functionality, and understated beauty, these pieces transform any space into a serene and stylish haven.',
    img: [
      '/src/assets/img/collections-images/nordic-1.png',
      '/src/assets/img/collections-images/nordic-2.png'
    ]
  }
];

export const collectionSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {}
});
