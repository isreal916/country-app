import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../country-api/country-api-slice";

export const store = configureStore({
  reducer:{
    [apiSlice.reducerPath]:apiSlice.reducer,
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(apiSlice.middleware);
     

  }
  
})
