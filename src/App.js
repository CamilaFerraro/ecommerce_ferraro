import './App.css';
import React from 'react';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ContactoPage } from './components/ContactoPage/ContactoPage';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/contacto' element={<ContactoPage/>}/>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path='/productos/:productId' element={<ItemDetailContainer/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
