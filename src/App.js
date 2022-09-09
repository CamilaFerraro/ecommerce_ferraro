import logo from '../src/fotos/Logo.png';
import './App.css';
import MiPrimerComponent from './components/MiPrimerComponent';
import NavBar from './components/NavBar/NavBar'
//import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
//import ClassComponent  from './components/ClassComponents/ClassComponent';
//import Titulo from './components/Titulo/Titulo';
import Item from './components/Item/Item';
import ContainerComponent from './components/ContainerComponent/ContainerComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import CartWidget from './components/CartWidget/CartWidget';
import SuperForm from './components/SuperForm';
import ClassComponent from './components/ClassComponents/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Counter from './components/Counter';
import { useState } from 'react';
import CicloVida from './components/CicloVida';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListContainer greeting="Bienvenido a mi página"/>
      <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
