
import React, { useState, createContext } from "react";
import { MediConnect } from "./AppNavigation/MediConnect"
import './App.css';

export const CartContext = createContext();

function App() {

  const [cart, setCart] = useState([]);
 
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <MediConnect />
      </CartContext.Provider>
    </>
  )
}

export default App
