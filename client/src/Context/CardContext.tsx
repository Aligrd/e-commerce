import { createContext, useState } from "react";
import { TProduct } from './Product';

// type SetStateType = React.Dispatch<React.SetStateAction<TProduct[]>> //! type of useState setter fucntion
type StateObj = {
    MainType: Array<TProduct>,
    StateSetterType: React.Dispatch<React.SetStateAction<TProduct[]>>
}


const CardContext = createContext<StateObj>({
    MainType: [],
    StateSetterType: () => { }
});

export default CardContext;
