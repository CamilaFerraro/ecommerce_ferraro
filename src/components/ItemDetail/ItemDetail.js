import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const onAdd = (dato)=>{
        console.log("hizo click", dato);
        setContador(dato)
        addItem(item, dato)
    }

    return (
        <div className='itemDetail'>
            <h1>{item.title}</h1>
            <img src={item.image} style={{ height: "200px"}} alt={item.description}/>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>Cantidad seleccionada: {contador}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            {
                contador > 0 &&
                <Link to="/cart">
                    <button>Ir al carrito</button>
                </Link>
            }
        </div>
    )
}

export default ItemDetail;
