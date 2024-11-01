import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        let productoExistente = cart.find((element) => element.id === product.id)
        if (productoExistente) {
            let nuevoArray = cart.map((element) => {
                if (element.id === product.id) {
                    return {...element, cantidad: product.cantidad}
                } else {
                    return isElementOfType;
                }
                
            });
            setCart(nuevoArray);
        } else {
            setCart([...cart, product]);
        }
    }


    const eliminarProductoPorId = (id) => {
        let arrayFiltrado = cart.filter((product) => product.id !== id);
        setCart(arrayFiltrado)
    }

    const conseguirMontoTotal = () => {
        let totalCarrito = cart.reduce((acc, product)=>{
            return acc + (product.price * product.cantidad)
        }, 0)
        return totalCarrito;
    }

    const cantidadProductosTotal = () => {
        let itemsTotales = cart.reduce((acc, product) => {
            return acc + product.cantidad
        }, 0);

        return itemsTotales;
    };

    const vaciarCarrito = () => {
        setCart([]);
    }

    const getTotalQuantity = (id) => {
        let product = cart.find((element) => element.id === id)
        return product ? product.cantidad : 1;
    }


    let data = {
        cart,
        addToCart,
        vaciarCarrito, 
        eliminarProductoPorId, 
        conseguirMontoTotal, 
        cantidadProductosTotal,
        getTotalQuantity
    };


    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
