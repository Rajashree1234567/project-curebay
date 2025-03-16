
import React, { createContext, useState } from 'react';
import './App.css';

export const CartContext = createContext();
export const ThemeContext = createContext();

export const RootContext = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };
    
    const[cart, setcart] = useState([]);

  return (
    <div>
        <CartContext.Provider value={{cart, setcart}}>
            <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
                <div className={isDarkMode ? "dark-mode" : "light-mode"}>
                    {children}
                </div>
            </ThemeContext.Provider>
        </CartContext.Provider>
    </div>
  )
}
