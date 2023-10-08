import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      let productInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (productInCart) {
        // state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        // productInCart.qty += 1; //increment quantity by one
        // state.cart.push(productInCart);
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      let productInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      console.log(action.payload);
      if (action.payload.qty === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);

        //decrement the qty of that particular id in our array and push it back to redux store
        productInCart.qty -= 1;
        state.cart.push(productInCart);
      }
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart } = CartSlice.actions;
export default CartSlice.reducer;
