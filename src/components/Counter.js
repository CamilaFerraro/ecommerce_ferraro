import {useState} from 'react';

const Counter = ({numero}) => {
    const [contador, setContador] = useState(0);
    console.log ('Hola me estoy renderizando de nuevo')
    const suma = () => {
        setContador( contador + 1 )
    }
  return (
    <>
        <h1>Contador padre {numero}</h1>
        <div>Contador</div>
        <h2>{contador}</h2>
        <button onClick={suma}>Suma uno</button>
    </>
    
  );
};

export default Counter;