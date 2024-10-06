import React from 'react'
import "./Counter.css"
import { Button } from '@mui/material';

const Counter = ({contador, sumar, restar }) => {
    return (
        <div className='divCounter'>
            <Button onClick={sumar}>Sumar</Button>
            <h2>Cantidad: {contador}</h2>
            <Button onClick={restar}>Restar</Button>

            <Button variant='outlined'>Agregar al carrito</Button>
        </div>
    );
};

export default Counter