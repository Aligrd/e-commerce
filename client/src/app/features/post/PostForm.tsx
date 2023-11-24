import React, { FormEvent, useState } from 'react'
import { createPost } from './PostSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../user/userSlice'
import { sub } from 'date-fns'

const PostForm = () => {

    const dispach = useDispatch()

    const [author, setauthor] = useState<string>('')
    const [userId, setUserId] = useState<number>(0)
    const [content, setContent] = useState<string>('')

    const canSave = Boolean(author) && Boolean(userId) && Boolean(content)

    const users: Array<any> = useSelector(selectAllUsers)
    console.log(users)

    const userOptions = users.map(user => {
        return (
            <option key={user.id} value={user.id}>
                {user.username}
            </option>
        )
    })

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        if (author && content) {
            dispach(createPost(author, content, userId))
        }
        setauthor('');
        setContent('');
    }


    return (
        <div >
            <form className='flex flex-col' onSubmit={submitForm}>
                <label htmlFor="author">auhtor</label>
                <input
                    placeholder='author'
                    onChange={(e) => setauthor(e.target.value)}
                    value={author}
                    name='author'
                    id='author'
                    type="text" />
                <>
                    <label htmlFor="content">content</label>
                    <input
                        placeholder='content'
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        name='content'
                        id='content'
                        type="text" />
                </>
                <>

                    <select
                        aria-label='users'
                        defaultValue={"user"}
                        name='user'
                        title='user'
                        id="user"
                        onChange={e => setUserId(Number(e.target.value))}
                    >
                        <option title='' value="">--select user--</option>
                        {userOptions}
                    </select>

                </>
                <button
                    className='bg-red-200 p-3 mt-2 self-center  rounded-lg'
                    type='submit'
                    disabled={!canSave}

                >publish</button>
            </form>


        </div>
    )
}


export default PostForm