import React, {useContext, useState} from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import {db} from "../../utils/firebase";
import {collection, addDoc} from "firebase/firestore";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const CartContainer = () => {
    const {productCartList, removeItem, clearItems, getTotalPrice} = useContext(CartContext);
    const [idOrder, setIdOrder] = useState("");


    const sendOrder = (event) => {
        event.preventDefault();
        const order = { 
            buyer:{
                name: event.target.name.value + '' + event.target.surname.value,
                phone: event.target.number.value,
                email: event.target.email.value
            },
            items: productCartList,
            total: getTotalPrice(),
            date: new Date()
        }
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then(response => {
            setIdOrder(response.id);
            clearItems();
        });
    }
    
    const success = ()=>{
        Swal.fire('¡Pedido realizado con éxito!');
    }

    return (
        <div>
            {!idOrder ?
                <div>
                    <h2 className='elementoCentrado'>Carrito:</h2>
                    <div className='cart carritoElement'>
                        {
                            productCartList.map((item) => {
                                return (
                                    <div className='itemEnCarrito cartGrid' key={item.id}>    
                                    <p className='cantidad'>{item.quantity}</p>
                                    <img src={item.image} height="100px" className='producto' />
                                    <p className='producto'>{item.name}</p>
                                    <p className='precio'>${item.price}</p>
                                        <div className='removerButton'>
                                            <button onClick={()=>removeItem(item.id)} className='remover'>Remover producto</button>
                                        </div>
                                    </div>
                                )
                            })
                        }   
                    </div>
                    {
                        productCartList.length > 0 ?
                        <div className='total'>
                            <div className='elementoCentrado'>
                                <h3 className='carritoElement'>Total: ${getTotalPrice()}</h3>
                                <button onClick={()=>clearItems()} className='carritoElement'>Vaciar carrito</button>
                            </div>
                            <div className='elementoCentrado'>
                                <form onSubmit={sendOrder}>
                                    <fieldset> 
                                        <legend><strong>Enviar pedido:</strong></legend>
                                        <div>
                                            <label htmlFor="nombre">Nombre:</label>
                                            <input type="text" name="name" />
                                        </div>
                                        <div>
                                            <label htmlFor="nombre">Apellido:</label>
                                            <input type="text" name="surname" />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" name="email" />
                                        </div>
                                        <div>
                                            <label htmlFor="numero">Número de telefono:</label>
                                            <input type="number" name="number" />
                                        </div>
                                        <button variant="success" type="submit" onClick={()=>success()}>Enviar pedido</button> <input type="reset" value="Borrar" className="button" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        :
                        <div className='elementoCentrado'>
                            <p className='carritoElement'>El carrito está vacío</p>
                            <Link to='/' className='carritoElement'><button>Ver productos</button></Link>
                        </div>
                    }
                </div>
                :
                <p>Su ID de la compra es: {idOrder}. Le enviaremos un mail para proceder con el pago  de la misma.</p>
                
            }
        </div>
    )
}


