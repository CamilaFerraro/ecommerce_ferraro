import React, {useContext, useState} from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import {db} from "../../utils/firebase";
import {collection, addDoc, doc, updateDoc} from "firebase/firestore";

export const CartContainer = () => {
    const {productCartList, removeItem, clearCart, getTotalPrice} = useContext(CartContext);
    const [idOrder, setIdOrder] = useState("");

    const sendOrder = (event) => {
        event.preventDefault();
       // console.log("orden enviada", event)
       // console.log("nombre", event.target[0].value)
        const order = { 
            buyer:{
                name: event.target[0].value,
                phone: event.target[1].value,
                email: event.target[2].value
            },
            items: productCartList,
            total: getTotalPrice(),
            date: new Date()
        }
        console.log("order", order)
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then(response=>{
            console.log("response", response);
            setIdOrder(response.id)
        });

    }

    const updateOrder = () => {
        const queryRef = doc(db, "orders", "6gf5DpiDKbaiVYRV8bu9");
        updateDoc(queryRef, {
            buyer: {
                name: "camila",
                phone: "1157848965",
                email: "ferraro@gmail.com"
            },
            items:[
                {
                    category: "dulce",
                    image: "https://firebasestorage.googleapis.com/v0/b/coderhouse-ecommerce-6c48d.appspot.com/o/img_20190520_203804_9343411288613889609837-scaled.webp?alt=media&token=c246d1fd-1aa7-4f6d-bcdb-8b05748ad80e",
                    price: 230,
                    name: "Panqueque de DDL"
                }
            ],
            total: 230
        }).then(response=>console.log(response))

    }

    return (
        <div>
            <button onClick={updateOrder}>actualizar orden</button>
            {idOrder && <p>su orden fue creada, id {idOrder}</p>}
            {
                productCartList.length > 0 ?
                <div>
                    <h2 className='carritoElement'>Carrito:</h2>
                    {productCartList.map(item => (
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
                    <form onSubmit={sendOrder}>
                        <label>Nombre: </label>
                        <input type="text"/>
                        <label>Telefono: </label>
                        <input type="text"/>
                        <label>Correo: </label>
                        <input type="email"/>
                        <button type='submit'>Enviar orden</button>
                    </form>
                </div>
                :
                <div>
                    <p>El carrito está vacío, agrega algún producto</p>
                    <Link to="/"><button>Ir al listado de productos</button></Link>
                </div>
            }
            :
            <h3>Tu orden ha sido registrada!</h3>
        </div>
    )
}

