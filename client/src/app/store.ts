import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';
import postReducer from './features/post/PostSlice'
import userReducer from './features/user/userSlice'
import ProductReducer from "../app/features/product/ProductSlice";

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        post : postReducer,
        user : userReducer,
        new_products : ProductReducer 
    },
    //! from here we can shut down serialze
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck :{
            ignoredPaths :['./features/product/ProductExcerpt.tsx']
        }
    }) 
})