import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppProvider from './context/context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import Loading from './components/Loading';
import ProductDetail from './components/productDetail/ProductDetails';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <AppProvider>
      <Navbar />
      {isLoading ? (
        <Loading /> 
      ) : (
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/headphones' element={<Headphones />} />
            <Route path='/speakers' element={<Speakers />} />
            <Route path='/earphones' element={<Earphones />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="/product/:productSlug" element={<ProductDetail />} />
          </Routes> 
        </>
      )}
      <Footer /> 
    </AppProvider>
  );
}

export default App;
