
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { Career } from '../Pages/Career'
import { NAvigations } from './NAvigations'
import { ProductDetails } from '../Components/DetailsPage/ProductDetails'
import { Cart } from '../Components/DetailsPage/Cart'

export const MediConnect = () => {
  return (
    <Router>
        <div>
            <NAvigations />
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/about' element={<About/> } />
                <Route path='/career' element={<Career /> } /> 

                <Route path='/productdetails/:id' element={<ProductDetails /> } />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    </Router>
  )
}
