import React from "react"
import { TProduct } from "../Context/Product"
 type ContextObjType = {
    MainType: Array<TProduct>,
    StateSetterType: React.Dispatch<React.SetStateAction<TProduct[]>>
  }

  export default ContextObjType