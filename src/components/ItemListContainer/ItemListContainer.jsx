import React from "react";
import './ItemListContainer.css';
import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = ({greeting}) => {
  return (
    <div className="itemListContainer">
      <p>{greeting}</p>
    </div>
  );
}

export default ItemListContainer;