import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (productId) => {
        const productExists = productCartList.some(item => item.id === productId);
        return productExists;
    }

    const addItem = (item, quantity) => {
        const newProduct = {
            ...item,
            quantity
        }
        if (isInCart(item.id)) {
            const productPos = productCartList.findIndex(product => product.id === item.id);
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity = newArreglo[productPos].quantity = quantity;
            newArreglo[productPos].quantityPrice = newArreglo[productPos].quantity * newArreglo
            setProductCartList(newArreglo);
        } else {
            const newArreglo = [...productCartList];
            newProduct.quantityPrice = newProduct.quantity * newProduct.price;
            newArreglo.push(newProduct);
            setProductCartList(newArreglo);
        }
    }

    const removeItem = (itemId) => {
        const newArreglo = productCartList.filter(product => product.id !== itemId);
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

    const getTotalPrice = () => {
        const totalPrice = productCartList.reduce((acc, item) => acc + item.quantityPrice, 0)
        return totalPrice;
    }

    const getTotalProducts = () => {
        const totalProducts = productCartList.reduce((acc, item) => acc + item.quantity, 0);
        return totalProducts;
    }

    return (
        <CartContext.Provider value={{ productCartList, addItem, removeItem, clearItems, updateItem, isInCart, getTotalPrice, getTotalProducts }}>
            {children}
        </CartContext.Provider>
    )
}