import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(); 

const AppProvider = ({ children }) => {
  const [size, setSize] = useState(window.innerWidth)
  const [isCartActive, setIsCartActive] = useState(false)
  const [cart, setCart] = useState([])

  const addToCart = (product, qty) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: qty }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: qty }];
      }
    });
  };

  const quantityAdjustment = (e, productId) => {
    if (e.target.id === "increment") {
        setCart(cart.map(item =>
            item.id === productId ? 
            { ...item, quantity: item.quantity + 1 } : item
        ));
    }

    if (e.target.id === "decrement") {
      setCart(cart
        .map(item => 
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) 
      );
    }
};

  return (
    <AppContext.Provider
      value={
        {
          cart, 
          setCart,
          size,
          setSize,
          isCartActive, 
          setIsCartActive, 
          addToCart,
          quantityAdjustment
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider; 
