import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProducto = async () => {
            const queryRef = doc(db, "postres", productId);
            const response = await getDoc(queryRef);
            const newPostre = {
                id: response.id,
                ...response.data(),
            }
            setItem(newPostre)
        }
        getProducto();

    }, [productId]);


    return (
        <div className="item-detail-container">
            <p style={{ width: "100%", color: "black" }}>SELECCIONA LA CANTIDAD DE POSTRES QUE DESEES!</p>
            <div className="stock">
                <ItemDetail item={item} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;