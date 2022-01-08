import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      //check if product exists
      let exists = false;
      state.products.map((product) => {
        if (
          product._id === action.payload._id &&
          product.color === action.payload.color &&
          product.size === action.payload.size
        ) {
          //payload is what inside dispatch
          product.quantity += action.payload.quantity;
          state.total += action.payload.price * action.payload.quantity;
          exists = true;
        }
      });

      //product not exists
      if (!exists) {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    updateProductQuantity: (state, action) => {
      state.products.map((product) => {
        if (
          product._id === action.payload._id &&
          product.color === action.payload.color &&
          product.size === action.payload.size
        )
          product.quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      });
    },
  },
});

export const { addProduct, updateProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;
