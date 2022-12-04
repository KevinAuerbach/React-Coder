import React from "react";
import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <div className="col-md-12">
            <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
                <div className="card text-center mb-3">
                    <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <p className="card-text">{producto.nombre}</p>
                    </div>
                </div>
            </Link>
        </div>
        
    )
}

export default Item;