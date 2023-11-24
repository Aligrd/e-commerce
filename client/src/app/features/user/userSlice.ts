import { createSlice ,createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import axios from "axios";
const USER_END_POINT = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsersThunk = createAsyncThunk("users/fetch" , async()=>{

    const res = await axios.get(USER_END_POINT);

    return res.data;
}) 

//!TUserState
type TUserState = {
    userslist : Array<any>,
    status: 'idle' | 'pending'|'success',
    err: string
}


const intiaUserState : TUserState = {
    userslist : [],
    status: 'idle',
    err: ""
}

const userSlice = createSlice({
    name : 'users',
    initialState: intiaUserState,
    reducers:{
        AddUser: (state , action )=>{
            //! ImmerJs handle immutability under the hoood
            const newUser  = action.payload; 
            state.userslist.push(newUser);
        }
    },
    extraReducers:(builder : ActionReducerMapBuilder<TUserState>) =>{
        
        builder.addCase(fetchUsersThunk.pending  , (state , action) =>{
            state.status ="pending" 
        }).addCase(fetchUsersThunk.fulfilled  , (state , action : PayloadAction<any>) =>{
            state.status = 'success'

            const rendredUser =  action.payload.map((user : any) =>{
                user.joinedAt = new Date(Date.now())
                return user
            })
            state.userslist = state.userslist.concat(rendredUser) 
            // return action.payload //! 
            return state
        }).addCase(fetchUsersThunk.rejected  , (state , action) =>{

            state.err = String(action.error.message)
            console.log(`${state.err} happend`)
            
        })
    }
})


export const selectAllUsers = (state : any ) => state.user;

export default userSlice.reducer