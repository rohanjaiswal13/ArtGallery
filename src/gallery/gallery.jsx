import React, { useState } from "react";
import "./gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import car1 from "../assets/images/car1.jpg";
import car2 from "../assets/images/car2.jpg";
import car3 from "../assets/images/car3.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const images = [
    { src: car1, category: "hdpe" },
    { src: car2, category: "sprinkle" },
    { src: car3, category: "hdpe" },
    { src: img1, category: "irrigation" },
    { src: img2, category: "spray" },
    { src: img3, category: "irrigation" },
    { src: img4, category: "spray" },
    { src: img1, category: "irrigation" },
    { src: car1, category: "irrigation" },
    { src: car2, category: "hdpe" },
    { src: car3, category: "spray" },
    { src: img4, category: "sprinkle" },
  ];

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.category === filter);

  return (
    <div className="container">
      <div className="row">
        <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h1 className="gallery-title">Gallery</h1>
        </div>
        <div align="center">
          <button
            className={`btn btn-default filter-button ${
              filter === "all" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("all")}
            data-filter="all"
          >
            All
          </button>
          <button
            className={`btn btn-default filter-button ${
              filter === "hdpe" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("hdpe")}
            data-filter="hdpe"
          >
            HDPE Pipes
          </button>
          <button
            className={`btn btn-default filter-button ${
              filter === "sprinkle" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("sprinkle")}
            data-filter="sprinkle"
          >
            Sprinkle Pipes
          </button>
          <button
            className={`btn btn-default filter-button ${
              filter === "spray" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("spray")}
            data-filter="spray"
          >
            Spray Nozzle
          </button>
          <button
            className={`btn btn-default filter-button ${
              filter === "irrigation" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("irrigation")}
            data-filter="irrigation"
          >
            Irrigation Pipes
          </button>
        </div>
        <br />
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className={`gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ${image.category}`}
          >
            <img src={image.src} className="img-responsive" alt="Gallery" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
