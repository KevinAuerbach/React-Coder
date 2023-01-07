import React, { useState} from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const ItemDetail = ({producto}) => {
    const [itemStock, setItemStock] = useState(0)

    const {addItem} = useContext(CartContext)

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity)
        addItem(producto, quantity)
        }

    useEffect(() => {
        setItemStock(producto.stock)
    }, [producto])
    
    return (
        <div className="row">
            <div className="col-md-4">
                <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{producto.nombre}</h1>
                <p>{producto.nombre}</p>
                <p><b>${producto.precio}</b></p>
                <ItemCount stock={producto.stock} onAdd={onAdd}/>
            </div>
        </div>
    );
};

export default ItemDetail;