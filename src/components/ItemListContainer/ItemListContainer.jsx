import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const queryRef = !categoryId ?
      collection(db, "postres") :
      query(collection(db, "postres"), 
      where("category", "==", categoryId));
    getDocs(queryRef).then(response => {
      const resultados = response.docs.map(doc => {
        const newPostre = {
          id: doc.id,
          ...doc.data(),
        }
        return newPostre
      });
      setProductos(resultados);
    })
  }, [categoryId])


  return (
    <div>
      <h2>NUESTROS POSTRES</h2> 
     <ItemList items={productos}/>
    </div>
  );
}

export default ItemListContainer;