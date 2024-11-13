import { Component } from "react";

class TechnicalActivities extends Component {
  return(
      <section id = "gallery" style = {{ backgroundColor: "#fff" }}>
  <Slider {...settings}>
    {this.state.imageData.map((image, index) => (
      <div key={index} style={centerStyle}>
        <img src={image.src} alt={image.src} style={imageStyle} />
      </div>
    ))}
  </Slider>
      </section >
    );
}
