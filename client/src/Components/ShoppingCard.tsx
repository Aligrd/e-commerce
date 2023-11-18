import React, { useContext, useEffect } from 'react'
import CardContext from '../Context/CardContext'
import CardProduct from './CardProduct';

import ContextObjType from './CardContextType';
import { TProduct } from '../Context/Product';

const ShoppingCard = () => {

    const cardContext = useContext<ContextObjType>(CardContext);

    const [shoppingCard, setShoppingCard] = [cardContext.MainType, cardContext.StateSetterType];

    return (
        <div className='shopping-card'>
            {shoppingCard.map((product: TProduct, i: number) => {
                return (
                    <div key={i}>
                        <CardProduct {...product} />
                    </div>
                )
            })}
        </div>
    )
}

export default ShoppingCard