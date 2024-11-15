import React, { Component } from "react";
import { IMAGES } from "./LibraryPhotoData.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class LibraryGallery extends Component {
  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    const centerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    const imageStyle = {
      width: "400px",
      margin: "0 auto",
    };

    return (
      <section id="gallery" style={{ backgroundColor: "#fff" }}>
        <Slider {...settings}>
          {IMAGES.map((image, index) => (
            <div key={index} style={centerStyle}>
              <img src={image.src} alt={image.src} style={imageStyle} />
            </div>
          ))}
        </Slider>
      </section>
    );
  }
}

export default LibraryGallery;
