import TarjetaProducto from "../../common/tarjetaProducto/TarjetaProducto";

const ItemList = ( { items }) => {
    return (
        <div 
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "50px"
        }}>

            {items.map((item)=>{
                return <TarjetaProducto key={item.id} {...item}/>;
            })}

        </div>
    )

};

export default ItemList