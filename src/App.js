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

function App() {
  /*const [contadorPadre, setContadorPadre] = useState(0);
  const sumarPadre = () => {
    setContadorPadre(contadorPadre + 2)
  }*/
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <div>
      <ItemListContainer greeting="Bienvenido a mi página"/>
      </div>
      <ItemCount/>
      {/*<CicloVida numero={contadorPadre}/>
      <h2>{contadorPadre}</h2>
      <button onClick = {sumarPadre}>Sumar al Padre</button>*/}
      {/*<Counter numero={contadorPadre}/>*/}
      
      {/*<SuperForm title='Hola'>
        <div> Hola </div>
        <div> hola hermano </div>
      </SuperForm>*/}
      {/*<ClassComponent/>*/}
      {/*<FunctionalComponent/>*/}
        {/*<Titulo titulo={'Inicio'}/>
        <Titulo titulo={'Postres'}/>
        <Titulo titulo={'Pedidos'}/>*/}
        {/*<ContainerComponent titulo="Hola soy hijo del container" saludo="Hola"/>*/}
        {/*<ul>
          <Item nombre='Inicio' url={'/'}/>
          <Item nombre='Recetas' url={'/'}/>
          <Item nombre='Pedidos' url={'/'}/>
        </ul>*/}
        {/*<FunctionalComponent titulo="Hola" subtitulo="como estas"/>
        <ClassComponent tipoDeAuto="Compacto" color="Violeta" matricula={123} modelo={{año: 2016}}/>
        <MiPrimerComponent/>*/}
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>*/}
      </header>
    </div>
  );
}

export default App;
