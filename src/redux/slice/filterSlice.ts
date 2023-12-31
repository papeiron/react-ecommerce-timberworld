import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type FilterState = {
  selectedCategory: string | null;
  selectedPrice: string | null;
  selectedBrand: string | null;
};

const initialState: FilterState = {
  selectedCategory: null,
  selectedPrice: null,
  selectedBrand: null
};

export const filterSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
    setPrice: (state, action: PayloadAction<string | null>) => {
      state.selectedPrice = action.payload;
    },
    setBrand: (state, action: PayloadAction<string | null>) => {
      state.selectedBrand = action.payload;
    },
    resetFilters: (state: FilterState) => {
      state.selectedCategory = null;
      state.selectedPrice = null;
      state.selectedBrand = null;
    }
  }
});

export const { setCategory, setPrice, setBrand, resetFilters } = filterSlice.actions;
