import { useEffect, useState } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../config-firebase";
import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();


  useEffect(() => {
    const itemsCollection = collection(db, "productos");

    let consulta = itemsCollection

    if (categoryName){
      consulta = query(itemsCollection, where('category', '==', categoryName));
    }

    getDocs(consulta).then((res) => {
      let array = res.docs.map((elemento) => {
        return {...elemento.data(), id: elemento.id}
      })

      setItems(array)
    });

  }, [categoryName]);


  return <ItemList items={items} />

}

export default ItemListContainer