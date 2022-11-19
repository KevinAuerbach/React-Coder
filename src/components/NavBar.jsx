import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="images/logo.png" width="200" alt="GamerZone" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Componentes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Monitores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Perifericos</a>
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