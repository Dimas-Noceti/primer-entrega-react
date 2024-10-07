import { useEffect, useState } from "react";
import { products } from "../../../productsMock"
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  const productFilter = products.filter( product => product.category === categoryName);

  useEffect( ()=>{

    
    const getProductos = new Promise((res, rej) => {
      let isLogued = true;
      if (isLogued) {
        res(categoryName ? productFilter : products);
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

  }, [productFilter])

  return <ItemList items={items}/>;
}

export default ItemListContainer