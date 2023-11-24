import React, { useContext, useEffect, useState } from 'react';
import CardContext from './Context/CardContext';
import ThemeContext from "./Context/ThemeContext"
import { TProduct } from "./Context/Product"
import ShoppingCard from "./Components/ShoppingCard"
import './App.css';
import Products from './Components/Products';
import Navbar from './Components/Navbar';

//! adding item will append them to shopping card so it can be context in all app

type StateObj = {
  MainType: Array<TProduct>,
  StateSetterType: React.Dispatch<React.SetStateAction<TProduct[]>>
}


function App() {
  const [shoppingCard, setShopingCard] = useState<Array<TProduct>>([]);

  const contextValue = {
    MainType: shoppingCard,
    StateSetterType: setShopingCard
  }

  return (
    <div className='h-full w-full'>
      <Navbar />
      <div className='h-full w-full flex items-center justify-items-center '>
        <Products />
      </div>
      {/* <ShoppingCard /> */}
    </div>

  );
}

export default App;

// <div className="main-container flex">
//           <div className="main">
//           </div>
//           <div className="filterSegement">
//           </div>
//         </div>
//         <div className='theme-toggle flex bg-blue-200 w-10 h-5 rounded-xl'>
//           <div className='toggle bg-red-300 w-5 h5 rounded-3xl '>

//           </div>
//         </div>