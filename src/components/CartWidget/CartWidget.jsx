import "./CartWidget.css";
import cart from '../../components/CartWidget/cart.svg';
import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div class="cart">
            <Link to="/cart">
                <a href="#"><img src={cart} width={"30px"}/></a>
            </Link>  
        </div>
    )
}

export default CartWidget;