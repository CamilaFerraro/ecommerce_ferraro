import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: "1",
                title: "Mousse de Chocolate",
                description: "Mousse de Chocolate Casero",
                price: "$200",
                imageUrl:'https://images.hola.com/imagenes/cocina/recetas/20200130159337/mousse-chocolate-postre-facil/0-776-92/mousse-chocolate-facil-rapido-teka-m.jpg',
            });
        }, 2000);
    });

    useEffect(() => {
        getItems.then((result) => {
            setItems(result);
        })
    }, []);

    return (
        <div>
            <ItemDetail
                title={items.title}
                description={items.description}
                imageUrl={items.imageUrl}
                price={items.price}
                key={items.id}
            />
        </div>
    );
}

export default ItemDetailContainer;