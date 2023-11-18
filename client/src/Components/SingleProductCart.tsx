import React from 'react'
import { TProduct } from '../Context/Product'
const SingleProduct = (product: TProduct) => {

    //this is for the shopping card 
    //! width of this is more than the product in productPage

    return (
        <div className=''>
            <div>
                <img className='' src={product.image} alt="" />
                <h2>{product.title}</h2>
                <h3>قیمت{product.price}تومان</h3>
            </div>
            <div>
                <p className=''>{product.description}</p>
            </div>
        </div>
    )
}

export default SingleProduct