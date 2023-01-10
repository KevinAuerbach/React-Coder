import React from "react";

const Carrousel = () => {
    return (
        <div id="carouselExample" className="carousel slide my-5">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../images/banner1.jpg" className="d-block w-100" alt="publicidad1"/>
                </div>
                <div className="carousel-item">
                    <img src="../images/banner2.jpg" className="d-block w-100" alt="publicidad2"/>
                </div>
                <div className="carousel-item">
                    <img src="../images/banner3.jpg" className="d-block w-100" alt="publicidad3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carrousel