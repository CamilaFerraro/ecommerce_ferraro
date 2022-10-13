import './App.css';
import React, { useState } from 'react';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ContactoPage } from './components/ContactoPage/ContactoPage';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from './Context/CartContext';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/contacto' element={<ContactoPage/>}/>
              <Route path="/productos" element={<ItemListContainer/>}/>
              <Route path='/productos/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
              <Route path="/cart" element={<CartContainer/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter> 
    </CartProvider>
  );
}

export default App;
