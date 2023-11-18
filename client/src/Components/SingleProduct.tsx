import React, { useState } from 'react'
import { TProduct } from '../Context/Product'
import { FaRegHeart, FaHeart } from "react-icons/fa"
const SingleProduct = (product: TProduct) => {

    //! we get several images here so we can Make a slider to see all of them
    //& we can me andoverlay on hiver for image or all product container
    const [isHovering, setIsHovering] = useState(false)
    const [isLiked, setIsLiked] = useState(false)


    return (
        <div className='flex flex-col justify-self-center w-full h-full  md:w-2/3 h-max p-4 bg-stone-200 rounded-md hover:scale-105 cursor-pointer shadow-xl '
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className='flex flex-col items'>
                <img className="h-40 just mx-auto" src={product.image} alt={product.brand} />
                <h2>{product.title}</h2>
                <h3 className='text-end'>قیمت:{product.price}</h3>
                {isHovering && (
                    <div className="flex justify-center items-center absolute top-4 right-4 bg-slate-600 px-2 rounded-md ">
                        {!isLiked ? (<FaRegHeart className='text-white mr-2 cursor-pointer' onClick={() => setIsLiked(true)} />) :
                            (<FaHeart className='text-white mr-2 cursor-pointer' onClick={() => setIsLiked(false)} />)}
                        <h1 className="text-white">{product.rating.rate}</h1>
                    </div>)}
            </div>
        </div>
    )
}

export default SingleProduct