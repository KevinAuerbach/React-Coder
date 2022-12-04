import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos)
            }, 2000);
        })

        promesa.then((respuesta) => {
            setProductos(respuesta)
        });
    }, [id]);

    

    return (
        <div className="container mt-5">
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;