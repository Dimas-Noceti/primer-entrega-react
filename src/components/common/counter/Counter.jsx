import React from 'react'
import "./Counter.css"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Counter = ({contador, sumar, restar, agregarAlCarrito,}) => {
    return (
        <div className='divCounter'>
            <Button onClick={sumar}>Sumar</Button>
            <h2>Cantidad: {contador}</h2>
            <Button onClick={restar} disabled={contador == 0}>Restar</Button>

            <Button variant='outlined'onClick={() => {agregarAlCarrito(contador)}}>
                Agregar al carrito
            </Button>
        </div>
    );
};

export default Counter