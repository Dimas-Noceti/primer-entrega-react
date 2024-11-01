import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../config-firebase";
import {collection, addDoc} from "firebase/firestore";

const Checkout = () => {

    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: ""
    })

    const { cart, conseguirMontoTotal, vaciarCarrito } = useContext(CartContext);
    const [ orderId, setOrderId ] = useState(null);
    const [ cargando, setCargando ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setCargando(true);

        let total = conseguirMontoTotal()
        
        const order = {
            comprador: user,
            productos: cart,
            total
        };

        let refCollection = collection(db, "orders")
        addDoc(refCollection, order).then((res) => {
            setOrderId(res.id);
            vaciarCarrito();
        }).catch(()=>{
            console.log(error)
        })
        .finally(() => {setCargando(false)})
    }


    const handleChange = (e) => {
        const { value, name } = e.target;
        setUser({...user, [name]: value})
    }

    if (cargando) {
        return <h2>Cargando...</h2>
    }


    return (
        <div>
            {orderId ? (<h1>El numero de orden es: {orderId}</h1>) : (
            <form onSubmit={handleSubmit}>
                <h1>Proceso de compra</h1>
                <input type="text" placeholder="Nombre" onChange={handleChange} name="nombre"/>;
                <input type="text" placeholder="Apellido" onChange={handleChange} name="apellido"/>;
                <input type="text" placeholder="Email" onChange={handleChange} name="email"/>;
                <input type="text" placeholder="Telefono" onChange={handleChange} name="telefono"/>;
                <button>Finalizar compra</button>
            </form>
            )}
        </div>
    ) 
}

export default Checkout;