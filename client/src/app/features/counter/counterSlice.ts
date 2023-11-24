import { createSlice ,Reducer ,CaseReducer, PayloadAction ,Slice, SliceCaseReducers } from "@reduxjs/toolkit";

type CounterState = {
    count :number;
}
type TCounterReducer = Reducer<CounterState> 

type CounterReducer = Reducer & {}

const intialState   = {
    count : 0
}


export const counterSlice = createSlice({
    name : "count",
    initialState : intialState,
    reducers:{
        incrementByAmout:(state , action : PayloadAction<CounterState>)=>{
            state.count += action.payload.count;
        },
        decrementByAmount:(state , action :PayloadAction<CounterState>)=>{
            state.count -= action.payload.count;
        },
        increment:(state)=>{
            state.count += 1;
        },
        decrement:(state)=>{
            state.count -= 1;
        },
        reset:(state) =>{
            state.count  = 0
        }
    }
})




export const {increment , decrement, incrementByAmout ,decrementByAmount, reset}  = counterSlice.actions

export default counterSlice.reducer