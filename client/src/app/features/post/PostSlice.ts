import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { TPost } from "../Types/PostType";


const intialState =new Array<TPost>()

//! in createSlice immerJs help 
intialState.push({
    Author: "lebron james",
    content: "today is a great day",
    publishedAt :new Date(Date.now()),
    like:10,
    postId: nanoid(),
    userId:1
} , 
{
    Author: "lebron james",
    content: "we are da best of da best",
    publishedAt :new Date(Date.now()),
    like:20,
    postId: nanoid(),
    userId:2
})


const postSlice = createSlice({
    name :"posts",
    initialState : intialState,
    reducers : {
        createPost :{
            reducer: (state , action :PayloadAction<any>) => {
                state.push(action.payload)
            },
            prepare :(author: string, content: string ,userId:number) =>{
                return {
                    payload :{
                        author: author,
                        content:content,
                        publishedAt:new Date(Date.now()),
                        id:nanoid(),
                        like:0,
                        userId:userId
                    }
                }
            }

        },
        deletePost: (state , action : PayloadAction<any> ) =>{  
            const {postId} = action.payload
            console.log(postId)
            const post = state.find(post => post.postId === postId)
            if(post){
                const postIndex =state.indexOf(post)
                state.splice(postIndex , 1)
            }
        },
        incrementLike:(state , action : PayloadAction<any> ) =>{
            const {postId , like} = action.payload
            console.log("payload" , action.payload)
            const existingPost = state.find(post => post.postId === postId)
            console.log(existingPost)
            if(existingPost){
                existingPost.like = like + 1;
            }
        },
        decrementLike:(state, action :PayloadAction<any>) =>{
            const {postId , like} = action.payload
            const existingPost = state.find(post => post.postId === postId)
            if(existingPost){
                existingPost.like = like - 1;
            } 
        }


    },
})

//! selectors
export const selectAllPosts = (state : any) => state.post;

//! reducers actions
export const {createPost ,incrementLike,decrementLike,deletePost } = postSlice.actions

export default postSlice.reducer

        // deletePost:(state , action : PayloadAction<Post>) =>{}