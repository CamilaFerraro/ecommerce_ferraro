import './ItemListContainer.css';
import { arregloPostres } from "../ItemListContainer/mock-data"
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {db} from "../../utils/firebase";
import {collection, getDocs} from "firebase/firestore";

const ItemListContainer = () => {
  const {categoryId} = useParams();
  console.log('categoryId', categoryId)
  const [items, setItems] = useState([]);

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

  return (
    <>
      {items.length > 0 ? (
        <ItemList itemsList = {items}/>
      ) : (
        <div>Cargando...</div>
      )}
    </>
  );
};

export default ItemListContainer;