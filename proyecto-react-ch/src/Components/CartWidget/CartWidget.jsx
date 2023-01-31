import React from 'react';

const CartWidget = ({cantCarrito}) => {
    return (
        <>
           <i class="fa-solid fa-cart-shopping"></i> 
           <p>{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
