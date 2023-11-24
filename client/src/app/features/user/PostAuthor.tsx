import React from 'react'
import { useSelector } from "react-redux";
import { selectAllUsers } from "./userSlice";


const PostAuthor = ({ userId }: { userId: any }) => {

    const users = useSelector(selectAllUsers)

    const author = users.find((user: any) => user.id === userId)

    return (
        <span>
            by {author ? author.name : "unknown author"}
        </span>
    )
}

export default PostAuthor