import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.name}
        style={{ height: '500px' }} />
      <p>{item.name}</p>
      <p>{item.id}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <Link to={`/productos/${item.id}`}>
        <button className='boton-ver'>Seleccionar Cantidad</button>
      </Link>
    </div>
  );

};

export default Item;