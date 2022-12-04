import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos.find(producto => producto.id === parseInt(id)))
            }, 2000);
        })

        promesa.then((respuesta) => {
            setProducto(respuesta)
        });
    }, [id]);

    return (
        <div className="container my-5">
            <ItemDetail producto={producto}/>
        </div>
    );
};

export default ItemDetailContainer;