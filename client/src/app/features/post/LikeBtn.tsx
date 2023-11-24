import React from 'react'
import { TPost } from '../Types/PostType'
import { useDispatch } from 'react-redux'
import { incrementLike, decrementLike } from './PostSlice'

const LikeBtn = ({ post }: { post: TPost }) => {

    const dispatch = useDispatch()

    return (
        <div>
            <h1 className='text-blue-700'>{post.like}</h1>
            <button
                className='p-2 bg-red-200 text-black border border-1 border-black'
                onClick={() => dispatch(incrementLike({
                    postId: post.postId,
                    like: post.like
                }))}
            >Like</button>
            <button
                className='p-2 bg-red-200 text-black border border-1 border-black'
                onClick={() => dispatch(decrementLike({
                    postId: post.postId,
                    like: post.like
                }))}
            >dislike</button>
        </div>
    )
}

export default LikeBtn