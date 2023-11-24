import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "../../../Context/Product";
import { sub } from "date-fns";

//! uses ImmerJS under the hood 

export const  fetchProductsActionCreator = createAsyncThunk("product/fetch" , async ()=>{
    const res = await axios.get("https://dummyjson.com/products")
    return res.data
})

const intialProductState = {
    products : [],
    status : 'idle',
    error: ''
}

const ProductSlice = createSlice({
    name : "product",
    initialState : intialProductState,
    reducers:{
        AddProduct:(state , action: PayloadAction<TProduct>)=>{
            
        }
    },
    extraReducers : (builder) =>{
        builder
            .addCase(fetchProductsActionCreator.pending , (state, action) =>{
            state.status = 'laoding'
        }).addCase(fetchProductsActionCreator.fulfilled ,(state ,action :PayloadAction<any>) =>{
            state.status = 'Fetch Success!'
            let min = 1;
            //!
            const loadedPosts = action.payload.products.map((product :any) =>{
                   product.date = sub(new Date() , {minutes : min++})
                   return product
            })
            state.products = state.products.concat(loadedPosts)// add new fetched product to all product state
        }).addCase(fetchProductsActionCreator.rejected , (state , action) =>{
            state.error = String(action.error.message)
        })
    }
}) 



export const { AddProduct }  = ProductSlice.actions

export const getAllProducts = (state : any) => state.new_products.products
export const getProductStatus = (state : any) => state.new_products.status
export const getProductsErr = (state : any) => state.new_products.error

export default ProductSlice.reducer
