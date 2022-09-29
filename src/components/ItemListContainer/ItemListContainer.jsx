import './ItemListContainer.css';
import { arregloPostres } from "../ItemListContainer/mock-data"
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {db} from "../../utils/firebase";
import {collection, getDocs, query, where} from "firebase/firestore";

const ItemListContainer = () => {
  const {categoryId} = useParams();
  const [items, setItems] = useState([]);

  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });

  useEffect(()=>{
    const queryRef = !categoryId ? collection(db, "postes") : query(collection(db, "postres"), where("category", "==", categoryId));
    getDocs(queryRef).then(response=>{
      const resultados = response.docs.map(doc=>{
        const newPostre = {
          id: doc.id,
          ...doc.data(),
        }
        return newPostre
      });
      console.log(resultados)
      setItems(resultados);
    })
  }, [categoryId])


  return (
    <div>
      <p>POSTRES</p>
      {!items ? (<h3>Cargando...</h3>) : (<ItemList itemsList = {items}/>)}
    </div>
  );
}

export default ItemListContainer;