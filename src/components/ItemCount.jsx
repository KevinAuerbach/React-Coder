import React, {useState} from "react";

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1);

    const bajarContador = () => {
        if(contador > 1) {
            setContador(contador - 1);
        }
    }

    const subirContador = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const onAdd = () => {
        if(stock > 0) {
            alert("Agregaste " + contador + " productos al carrito")
        }
    }

    return (
        <div className="container">
            <div className="btn-group mx-2" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" onClick={bajarContador}>-</button>
                <button type="button" className="btn">{contador}</button>
                <button type="button" className="btn btn-outline-primary" onClick={subirContador}>+</button>
            </div>
            <button type="button" className="btn btn-success" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;