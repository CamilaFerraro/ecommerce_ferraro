import React, {useEffect} from "react";
import {db} from "../../utils/firebase";
import {collection, getDocs, query, where} from "firebase/firestore";
import { Link } from "react-router-dom";

export const ContactoPage = () => {

 useEffect(()=>{
    const getData = async()=>{
        const queryRef = query(collection(db, "postres"), where("category", "==", "chocolate"))
        const response = await getDocs(queryRef);
        console.log(response)
        const productos = response.docs.map(doc => {
            const newProduct = {
            ...doc.data(),
            id: doc.id
            }
            return newProduct
        })
        console.log(productos);
    }
    getData();
 }, [])

    return(
        <div>
            <p> También puedes encontrarnos en</p><a href="https://www.instagram.com/eliferraroscatering/?hl=es-la"> 👉🏽 ¡Instagram! 👈🏽 </a>
        </div>
    )
}
