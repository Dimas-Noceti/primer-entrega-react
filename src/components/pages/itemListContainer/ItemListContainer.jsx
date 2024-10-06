import { useEffect, useState } from "react";
import { products } from "../../../productsMock"
import ItemList from "./itemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect( ()=>{
    const getProductos = new Promise((res, rej) => {
      let isLogued = true;
      if (isLogued) {
        res(products);
      } else {
        rej({ message: "Algo salio mal" });
      }
    });

    getProductos
      .then((response) => {
        setItems( response );
    })
      .catch((error) => {
        console.log("Entro en el catch ", error);
    });

  }, [])

  return <ItemList items={items}/>;
}

export default ItemListContainer