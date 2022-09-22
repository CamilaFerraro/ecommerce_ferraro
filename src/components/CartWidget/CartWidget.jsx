import "./CartWidget.css";
import cart from '../../components/CartWidget/cart.svg';
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const {getTotalProducts} = useContext(CartContext);
    return (
        <div class="cart">
            <Link to="/cart">
                <a href="#"><img src={cart} width={"30px"}/></a>
                <span>{getTotalProducts()}</span>
            </Link>  
        </div>
    )
}

export default CartWidget;