import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(); 

const AppProvider = ({ children }) => {
  const [size, setSize] = useState(window.innerWidth)
  const [cart, setCart] = useState([
    {
      id : 1,
      image : 'bg-gray-300',
      quantity : 3,
      name : 'Gray three',
      price : 1100
    },
    {
      id : 2,
      image : 'bg-gray-500',
      quantity : 2,
      name : 'Gray five',
      price : 1500
    }
  ])

  return (
    <AppContext.Provider
      value={
        {
          cart, 
          setCart,
          size,
          setSize
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

