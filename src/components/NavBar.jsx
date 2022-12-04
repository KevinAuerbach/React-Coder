import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src="images/logo.png" width="200" alt="GamerZone" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname="page" aria-current="page" to={"/categoria/componentes"}>Componentes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname="page" to={"/categoria/monitores"}>Monitores</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname="page" to={"/categoria/perifericos"}>Perifericos</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div><CartWidget /></div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;