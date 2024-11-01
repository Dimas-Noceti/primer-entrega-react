import React, { useContext } from 'react';
import Cart from './Cart';
import { CartContext } from '../../../context/CartContext';

const CartContainer = () => {

    const {cart, vaciarCarrito, eliminarProductoPorId, conseguirMontoTotal} = useContext( CartContext );

    let total = conseguirMontoTotal();


    return <Cart cart={cart} vaciarCarrito={vaciarCarrito} eliminarProductoPorId={eliminarProductoPorId} total={total}/>
}

export default CartContainer;