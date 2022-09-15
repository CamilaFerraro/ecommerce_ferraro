import './ItemCount.css';
import { useState } from "react";



const ItemCount = ({stock, initial, onAdd}) => {
    
    const [ItemCount, setItemCount] = useState(initial);
        const sumar = () => {
            if (ItemCount < 10){
                setItemCount(ItemCount + 1);
            } else {
                setItemCount(1)
            }
        }
        const restar = () => {
            if (ItemCount > 1){
                setItemCount(ItemCount - 1);
            } else {
                setItemCount(10)
            }
        }

    return(
        <div className='estilosContador'>
            <p>Stock disponible: {stock}</p>
            <div className='contador'>
                <button disabled={stock===0} onClick={sumar} className='botonControl'>+</button>
                <p>{ItemCount}</p>
                <button disabled={stock===0} onClick={restar} className='botonControl'>-</button>
            </div>
        <button disabled={stock === 0} className='botonAgregar' onClick={()=>onAdd(ItemCount)}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;