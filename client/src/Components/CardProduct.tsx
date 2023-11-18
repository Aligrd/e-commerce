import React, { useContext, useState } from 'react'
import { TProduct } from '../Context/Product'
import CardContext from '../Context/CardContext'
import SingleProductCard from './SingleProductCart'
const CardProduct = (product: TProduct) => {

    const cardContext = useContext(CardContext);

    const [shoppingCard, setShoppingCard] = [cardContext.MainType, cardContext.StateSetterType];

    const [isEnter, setIsEnter] = useState<boolean>(false)

    const addToCard = () => {
        //product will get added to shopping card
        setShoppingCard([...shoppingCard, product])
    }
    const handleMouseEnter = (): void => {
        setIsEnter(true)
    }

    const handleMouseOut = (): void => {
        setIsEnter(false)
    }
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} className='product'>
            {isEnter && (<div>show Overlay</div>)
                //! add ovelay of like and add to favourite and to wishList or sucj things
            }
            {shoppingCard.map(product => <SingleProductCard  {...product} />)}
            <button onClick={addToCard}>add to cart</button>
        </div>
    )
}

export default CardProduct