
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    // add item
    addItem: (state, action) => {
      let flag = false;

      let temp = state.map((item) => {
        if (item.id === action.payload.id) {
          flag = true;

          return {
            ...item,
            quantity: item.quantity + 1
          };
        } else {
          return item;
        }
      });

      if (!flag) {
        temp.push({
          ...action.payload,
          quantity: 1
        });
      }

      return temp;
    },

    // remove item
    removeItem:(state,action)=>{
      let temp= state.map((item)=>{
        if(item.id ==action.payload){
           if(item.quantity >1){
            return {
              ...item,
              quantity:item.quantity-1
            }
           } else{
            return false
           }
        } else {
          return item
        }
      })
      let temp2=temp.filter((item)=>{
        return item
      })
      return temp2
    },

    // clear cart

    clearCart:()=>{
      return []
    }
  }
});

export default CartSlice.reducer;
export const { addItem, removeItem,clearCart } = CartSlice.actions;
