import React, { ReactElement } from 'react'
import { TPost } from '../Types/PostType';
import { useSelector } from "react-redux";
import { selectAllPosts } from './PostSlice';
import { useDispatch } from 'react-redux';
import { format, formatDistance } from 'date-fns';
import { createPost } from './PostSlice';
import { nanoid } from '@reduxjs/toolkit';
import { incrementLike, decrementLike, deletePost } from './PostSlice';
import LikeBtn from './LikeBtn';
import NewProduct from '../product/NewProduct';

const PostList = () => {

  const posts: Array<TPost> = useSelector(selectAllPosts);
  const dispatch = useDispatch()

  const ordredPosts = posts.slice().sort((a, b) => JSON.stringify(b.publishedAt).localeCompare(JSON.stringify(a.publishedAt)))

  console.log("ordred", ordredPosts)



  return (
    <div className='bg-[#606D5D] p-2'>
      {
        <NewProduct />
        // ordredPosts.map((post: TPost) => {
        //   const rendredPost: ReactElement = (
        //     <div key={post.postId} className='bg-[#88958D] tet-black border border-1 border-b-amber-900 text-[#efefef] max-w-md p-2 mb-2'>
        //       <h1 className='opacity-80'>{post.Author}</h1>
        //       <p>{post.content}</p>
        //       <div className='flex flex-row-reverse justify-between'>
        //         <h1 className=''>{`${formatDistance(post.publishedAt, new Date("2023-11-23T14:50:15.895Z"))} ago`}</h1>
        //         <LikeBtn post={post} />

        //         {/* <button type='submit' onClick={() => dispatch(decrementLike(post.like))}>dislike</button> */}

        //         <button className='bg-red-600 h-10 border-[2px_solid_black]' onClick={() => dispatch(deletePost({ postId: post.postId }))}>Remove</button>
        //       </div>

        //     </div>)
        //   return rendredPost
        // })
      }


    </div>
  )
}

export default PostList
