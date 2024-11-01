import React, { useEffect, useState } from 'react';
import ItemDetail from './itemDetail';
import { products } from '../../../productsMock';
import { useParams, Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from "../../../config-firebase";

const ItemDetailContainer = () => {
    const { addToCart, getTotalQuantity } = useContext( CartContext )

    const [item, setItem] = useState({});
    const {id} = useParams();


    let totalAgregados = getTotalQuantity(id);


    useEffect(()=>{
        let productCollection = collection(db, 'productos');
        let refDoc = doc(productCollection, id)
        let getProduct = getDoc(refDoc);
        getProduct.then(res => setItem({...res.data(), id: res.id}))
    }, [ id ]);

    const agregarAlCarrito = ( cantidad ) => {
        let prodcutoCarrito = {...item, cantidad};
        addToCart(prodcutoCarrito);
    }


    return <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito} totalAgregados={totalAgregados}/>
}

export default ItemDetailContainer