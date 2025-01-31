import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AppProvider from './context/context'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import Checkout from './pages/Checkout'

function App() {

  return (
    <AppProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/headphones' element={<Headphones />}/>
        <Route path='/speakers' element={<Speakers />}/>
        <Route path='/earphones' element={<Earphones />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </AppProvider>   
  )
}

export default App
