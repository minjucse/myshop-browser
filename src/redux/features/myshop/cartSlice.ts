// src/redux/features/myshop/cartSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  [key: string]: any;
}

export interface CartState {
  userInfo: any[];
  products: Product[];
}

const initialState: CartState = {
  userInfo: [],
  products: [],
};

export const cartSlice = createSlice({
  name: "myShop",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

    increaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (item) item.quantity++;
    },

    drecreaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (item && item.quantity > 1) item.quantity--;
    },

    deleteItem: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },

    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
