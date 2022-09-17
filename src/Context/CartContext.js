import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, quantity)=>{
        console.log("item", item, "quantity", quantity)
        const newProduct = {
            ...item,
            quantity
        }
        console.log("newProduct", newProduct)
        const newArreglo = [...productCartList];
        newArreglo.push(newProduct);
        setProductCartList(newArreglo);
    }

    const removeItem = (itemId) => {
        console.log("itemId", itemId)
        const newArreglo = productCartList.filter(product=>product.id!==itemId);
        setProductCartList(newArreglo)
    }

    const clearItems = () => {
        setProductCartList([]);
    }

    const updateItem = (item, quantity) => {
        let newProductCartList = productCartList.filter(
          (product) => product.id !== item.id
        );

        const newProduct = {
            ...item,
            quantity,
        };

        newProductCartList.push(newProduct);
        setProductCartList(newProductCartList);
    };

const isInCart = (itemId) => {
    const productExists = productCartList.find((item) => item.id === itemId);
    
    if (productExists !== undefined) {
      
      return true;
    } else {
      console.log('false');
      return false;
    }
};

    return(
        <CartContext.Provider value ={{productCartList, addItem, removeItem, clearItems, updateItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}