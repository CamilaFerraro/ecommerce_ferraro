import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../Context/CartContext';

export const ItemDetail = ({title, image, description, price}) => {
    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const onAdd = (dato)=>{
        console.log("hizo click", dato);
        setContador(dato)
        addItem(title, image, description, price, dato)
    }
    return (
        <div className='itemDetail'>
            <h1>{title}</h1>
            <img src={image} alt={description} height="250px"/>
            <p>{description}</p>
            <p>{price}</p>
            <h6>Cantidad seleccionada: {contador}</h6>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}

