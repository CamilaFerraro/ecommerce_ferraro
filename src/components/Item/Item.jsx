import React from 'react';
import {Link} from 'react-router-dom';
import './Item.css';

const Item = ({image, id, name, description, price}) => {
  return (
    <div>
      <img src ={image} alt={name} height = '500px'/>
      <h1>{name}</h1>
      <p>{id}</p>
      <p>{description}</p>
      <p>{price}</p>
      <Link to={`/productos/${id}`}>
        <button className='boton-ver'>Seleccionar Cantidad</button>
      </Link>
    </div>
  );
};

export default Item;