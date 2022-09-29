import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { arregloPostres } from "../ItemListContainer/mock-data";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {db} from "../../utils/firebase";
import {collection, getDocs} from "firebase/firestore";

    const ItemDetailContainer = ()=>{
    const {productId} = useParams();
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const item = arregloPostres.find(item=>item.id === parseInt(id));
            resolve(item)
        })
    }

    useEffect(()=>{
        const getData = async () => {
            const query = collection(db, "postres");
            const response = await getDocs(query);
            const postre = response.docs.map((doc) => {
                const newPostre = {
                  ...doc.data(),
                  id: doc.id,
                };
                return newPostre;
            });
            console.log(postre);
        }
        getData();
    }, [])

    console.log('item:', item)
    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "black"}}>SELECCIONA LA CANTIDAD DE POSTRES QUE DESEES!</p>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;