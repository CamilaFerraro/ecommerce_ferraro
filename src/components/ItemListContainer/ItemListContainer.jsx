import './ItemListContainer.css';
import { arregloPostres } from "../ItemListContainer/mock-data"
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const {categoryId} = useParams();
  console.log('categoryId', categoryId)
  const [items, setItems] = useState([]);
  
  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arregloPostres);
    }, 2000);
  });

  useEffect(() => {
    getData.then((result) => {
      setItems(result);
      console.log(result);
    })
  }, []);

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