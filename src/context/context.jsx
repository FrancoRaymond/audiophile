import React, { createContext, useContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [size, setSize] = useState(window.innerWidth)
  const [isCartActive, setIsCartActive] = useState(false)
  const [toastMessage, setToastMessage] = useState('PS5 added to cart');
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  

  const formatCurrency = (amount) => new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(amount);

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

    toast.success(`${product.name} added to cart`);
  
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
          quantityAdjustment,
          formatCurrency,
          toastMessage,
          setToastMessage
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
