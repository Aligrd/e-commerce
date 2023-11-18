import React, { useState } from 'react'
import ShoppingCard from './ShoppingCard'
import SearchBar from '../search/SearchBar'
const Navbar = () => {

    //implement user authentication in here
    const [cardHover, setCardHover] = useState(false) //! show current items in cart and detail on hover

    return (
        <div className='h-[calc(80px)] w-full bg-red-400 flex items-center justify-center'>
            {/* Logo */}
            <SearchBar />
            {/* <ShoppingCard /> 
            //! we put shoppingCardLogo in here with will navigate us to shopping card we cant see what products we added in here by hovering
             */}
        </div>
    )
}

export default Navbar