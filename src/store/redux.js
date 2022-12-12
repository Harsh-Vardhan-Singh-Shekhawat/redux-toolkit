import { configureStore } from "@reduxjs/toolkit";
import UISlice from "./SliceUi";
import CartSlice from "./SliceCart"

const store = configureStore({
    reducer:{
        ui:UISlice.reducer,
        cart:CartSlice.reducer
    }
});

export default store