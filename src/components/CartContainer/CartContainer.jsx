import React, {useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const CartContainer = () => {
    const {productCartList, removeItem, clearCart, getTotalPrice} = useContext(CartContext);
    console.log(productCartList)

    return (
        <div>
            {
                productCartList.length > 0 ?
                <div>
                    <h2 className='carritoElement'>Carrito:</h2>
                    {productCartList.map((item) => (
                        <div className='itemEnCarrito'>
                            <img src={item.pictureUrl} height="50px" className='carritoElement' />
                            <p className='carritoElement'>Cantidad: {item.quantity}</p>
                            <p className='carritoElement'>{item.title}</p>
                            <p className='carritoElement'>Precio unitario: ${item.price}</p>
                            <p>Precio productos: {item.quantityPrice}</p>
                            <button onClick={()=>removeItem(item.id)} className='carritoElement'>Remover producto</button>  
                        </div>
                    ))}
                    <button onClick={()=>clearCart()} className='carritoElement'>Vaciar carrito</button>
                    <p>Precio total: {getTotalPrice()}</p>
                </div>
                :
                <>
                    <p>El carrito está vacío, agrega algún producto</p>
                    <Link to="/">
                        Ir al listado de productos
                    </Link>
                </>
            }
        </div>

    )
}

