import React from "react";
import car1 from "../../assets/images/car1.jpg"
import car2 from "../../assets/images/car2.jpg"
import car3 from "../../assets/images/car3.jpg"
const Home = () => {
  return (
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={car1} className="d-block w-100"/>
        </div>
        <div className="carousel-item">
          <img src={car2} className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={car3} className="d-block w-100"/>
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
  );
}

export default Home;
