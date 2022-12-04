import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-danger position-relative">
        <img src="../images/cart.svg" width="30" alt="Cart" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </button>
    )
}

export default CartWidget;