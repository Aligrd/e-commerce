import React from 'react'
import { TProduct } from '../../../Context/Product'

const ProductExcerpt = ({ product }: { product: any }) => {
    return (
        <article className='m-2 border border-1 border-rose-500 text-[#D8E0E1] bg-[#777972] rounded-lg p-3 '>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3> price : {product.price}$</h3>
            <h4>{product.stock} more in stock</h4>
        </article>
    )
}

export default ProductExcerpt