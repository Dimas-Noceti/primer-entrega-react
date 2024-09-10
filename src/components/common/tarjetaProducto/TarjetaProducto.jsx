import "./tarjetaProducto.css"

const TarjetaProducto = (props) => {

    const {nombre, saludo} = props

  return (
    <div>
        <h2>{saludo}</h2>
        <h3>{nombre}</h3>
        <button className="botonDetalles">Detalles</button>
    </div>
  )
}

export default TarjetaProducto