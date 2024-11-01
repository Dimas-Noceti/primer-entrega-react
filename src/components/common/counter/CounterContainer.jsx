import React, { useState } from 'react'
import Counter from './Counter';

const CounterContainer = ({agregarAlCarrito, stock, totalAgregados}) => {

    const [contador, setContador] = useState(totalAgregados);

    const sumar = () => {
        if (contador < stock) {
        setContador(contador + 1);
        } else {
            alert("No tenemos mas stock de este producto");
        }
    };

    const restar = () => {
        setContador(contador - 1);
    };

    let childProps = {
        contador,
        sumar,
        restar,
        agregarAlCarrito
    };


    return <Counter {...childProps} />
}

export default CounterContainer