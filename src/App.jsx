import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Basket from './components/Basket'
import { CartProvider } from './utils/CartContext';


const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <Navbar />
    <Routes>
    <Route path='/' exact element={<Home />} />
    <Route path='/basket' element={<Basket />} />
    </Routes>
    <Footer />
    </CartProvider>
    </BrowserRouter>
  )
}

export default App