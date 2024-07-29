import React from "react";
import "./home.css"
import car1 from "../../assets/images/car1.jpg"
import car2 from "../../assets/images/car2.jpg"
import car3 from "../../assets/images/car3.jpg"
const Home = () => {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={car1} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={car2} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={car3} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  <div className="card-section">
    <h1 className="title">Featured</h1>
    <div className="row">
      <div className="col-md-4">
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
              </div>
          </div>
      </div>
      <div className="col-md-4">
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
              </div>
          </div>
      </div>
      <div className="col-md-4">
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wideral lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
              </div>
          </div>
      </div>
      <div>
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wideral lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
              </div>
          </div>
      </div>
    </div>
  </div>

    </>
  );
}

export default Home;
