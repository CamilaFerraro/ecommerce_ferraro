import "./CartWidget.css";
import cart from '../../components/CartWidget/cart.svg';
import React from "react";

const CartWidget = () => {
    return (
        <div class="cart">
            <a href="#"><img src={cart} width={"30px"}/></a>
        </div>
    )
}

export default CartWidget;