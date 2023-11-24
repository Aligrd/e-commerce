import React, { useEffect, useState } from 'react'
import { TProduct } from '../Context/Product'
import axios from 'axios'

//! components
import SingleProduct from './SingleProduct'
import PostList from '../app/features/post/PostList'
import PostForm from '../app/features/post/PostForm'
import NewProduct from '../app/features/product/NewProduct'


const Products = () => {

    const contentPerPage = 9;
    const [loading, setLoading] = useState(true)
    const [Products, setProduct] = useState<Array<TProduct>>([])

    //! pagination
    const [pageProducts, setPageProducts] = useState<TProduct[]>([])
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(1);
    const [pageCount, setPageCount] = useState<Number>(0)
    const pageNavNumber = [...Array(pageCount).keys()];

    //! redux 


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                const data = res.data
                setProduct(data);
                setPageCount(Math.ceil(data.length / contentPerPage));
                setPageProducts(data.slice((currentPageIndex - 1) * contentPerPage, ((currentPageIndex) * contentPerPage)));
                console.log(data)
                setLoading(false)
            })
    }, [])

    const navigateToPage = () => {
        setPageProducts(Products.slice((currentPageIndex - 1) * contentPerPage, ((currentPageIndex) * contentPerPage)));
    }

    useEffect(() => {

        navigateToPage()

    }, [currentPageIndex])

    return (

        <div className=' w-full h-full'>
            <NewProduct />
            {!loading ?
                (<>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full h-full gap-y-10">
                        {pageProducts.map((product, i) => <SingleProduct key={i} {...product} />)}
                    </div>
                    <div className="pageNav w-full flex justify-center my-4">
                        {pageNavNumber.map(pageNumber => <button
                            className='bg-sky-200 text-center mx-1 px-3 py-1  rounded-full text-xl  focus:outline outline-1 outline-stone-400 hover:bg-sky-100 '
                            key={pageNumber}
                            onClick={() => {
                                setCurrentPageIndex(pageNumber + 1)
                            }}>{pageNumber}</button>)}
                    </div>
                </>) :
                (<div className='h-full w-full flex justify-center items-center'>Loading...</div>)
            }
        </div>
    )
}

export default Products