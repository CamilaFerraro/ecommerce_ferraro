import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({title, image, description, price}) => {
    const [contador, setContador] = useState(0);

    const onAdd = (dato)=>{
        console.log("hizo click", dato);
        setContador(dato)
    }
    return (
        <div className='itemDetail'>
            <h1>{title}</h1>
            <img src={image} alt={description} height="250px"/>
            <p>{description}</p>
            <p>{price}</p>
            <h6>{contador}</h6>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}

