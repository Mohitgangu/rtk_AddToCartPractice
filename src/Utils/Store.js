import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducre from "./CartSlice"

const Store=configureStore({
    reducer:{
      Cartz:CartSliceReducre
    }
})

export default Store