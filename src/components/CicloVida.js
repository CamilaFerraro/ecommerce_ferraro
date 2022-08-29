import {useEffect, useState} from 'react';

const CicloVida = ({numero}) => {
    const [estado, setEstado] = useState(0);
    useEffect(() =>{
        console.log('Yo me ejecuto cuando ya se monto el componente');

    }, []);
    useEffect(() =>{
        console.log('Yo me ejecuto cuando el estado se actualiza');

    }, [estado]);
    console.log('Yo me ejecuto antes del montaje');
    return (
    <div>
        <h2>{estado}</h2>
        <button onClick={setEstado(estado + 2)}>Actualiza Estado</button>
    </div>
    );
}

export default CicloVida;