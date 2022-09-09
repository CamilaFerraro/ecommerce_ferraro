import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({title, imageUrl, description, price}) => {
    return (
        <div className='itemDetail'>
            <h1>Detalle {title}</h1>
            <img src={imageUrl} alt={description} height="250px"/>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

export default ItemDetail;