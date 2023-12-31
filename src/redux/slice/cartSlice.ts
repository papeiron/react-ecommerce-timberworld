import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const getLocalStorage = () => {
  const localStorageData = localStorage.getItem('cartItems');
  return localStorageData !== null ? JSON.parse(localStorageData) : []; // Return empty array if null
};

const setLocalStorage = (items: CartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(items.map((item) => item)));
};

export type CartItem = {
  id: number;
  productName: string;
  price: string;
  img: string[];
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: getLocalStorage(),
  isOpen: false
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isOpen = state.isOpen ? false : true;
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex < 0) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[itemIndex].quantity += 1;
      }
      setLocalStorage(state.items);
    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      const filteredCart = state.items.filter((item) => item.id !== action.payload.id);
      state.items = filteredCart;
      setLocalStorage(state.items);
    },
    removeFromCartOne(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      } else {
        const filteredCart = state.items.filter((item) => item.id !== action.payload.id);
        state.items = filteredCart;
      }
      setLocalStorage(state.items);
    },
    addToCartOne(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      state.items[itemIndex].quantity += 1;
      setLocalStorage(state.items);
    },
    updateQuantityInCart(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      state.items[itemIndex].quantity = action.payload.quantity;
      setLocalStorage(state.items);
    }
  }
});

export const {
  toggleCart,
  addToCart,
  removeFromCart,
  removeFromCartOne,
  addToCartOne,
  updateQuantityInCart
} = cartSlice.actions;
