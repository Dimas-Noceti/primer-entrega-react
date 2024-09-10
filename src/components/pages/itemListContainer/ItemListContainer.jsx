import TarjetaProducto from "../../common/tarjetaProducto/TarjetaProducto"

const ItemListContainer = () => {
  return (
    <div>
        <h1>Productos</h1>
        <div>
            <TarjetaProducto nombre="PA! Azul" saludo="Dimas"/>
            <TarjetaProducto nombre="PA! Manzana" saludo="Noceti"/>
            <TarjetaProducto nombre="PA! Uva" saludo="Estrada"/>
        </div>
    </div>
  )
}

export default ItemListContainer