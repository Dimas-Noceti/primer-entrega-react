import { Button } from '@mui/material'
import React from 'react'
import { DiBackbone } from 'react-icons/di'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Cart = ({ cart, vaciarCarrito, eliminarProductoPorId, total }) => {

  const limpiarSweetAlert = () => {
    Swal.fire({
      title: "Aceptas eliminar todos los prodcutos de tu carrito?",
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Listo! Has vaciado tu carrito");
        vaciarCarrito()
      } 
    });
  }

  return <div>
    <h2>Carrito</h2>
    {
      cart.map (product => {
        return <div key={product.id}>
          <h2>Titulo {product.title}</h2>
          <h3>Precio: {product.price}</h3>
          <h3>Cantidad: {product.cantidad}</h3>
          <h3>Subtotal: {product.price * product.cantidad}</h3>
          <Button variant='contained' onClick={()=>eliminarProductoPorId(product.id)}>Eliminar</Button>
          </div>
      })
    }

    {total > 0 && (
      <>
        <Button variant='contained' sx={{marginTop: 10}} onClick={limpiarSweetAlert}>Vaciar carrito</Button>
        <Link to={"/checkout"}>
          <Button variant='contained' sx={{marginTop: 10}}>Finalizar compra</Button>
        </Link>
      </>
      )}

    {total > 0 ? (<h2>El total a pagar es: ${total}</h2>) : (<h2>Carrito vacio</h2>)}
  </div>
}

export default Cart