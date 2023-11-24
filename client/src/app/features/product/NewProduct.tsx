import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, getProductsErr, getProductStatus, fetchProductsActionCreator } from '../product/ProductSlice'

//! components
import ProductExcerpt from './ProductExcerpt'

//! redux type 
import { AppThunkDispatch } from '../Types/ActionType'

const NewProduct = () => {

    const dispatch = useDispatch<AppThunkDispatch>()

    const products = useSelector(getAllProducts)
    const products_status = useSelector(getProductStatus)
    const products_error = useSelector(getProductsErr)


    useEffect(() => {
        if (products_status === "idle") {
            dispatch(fetchProductsActionCreator())
        }
    }, [products_status, dispatch])

    const renderProduct = products.map((product: any, inx: number) => <ProductExcerpt key={inx} product={product} />)

    return (
        <div className='grid grid-cols-4'>
            {renderProduct}
        </div>
    )
}

export default NewProduct