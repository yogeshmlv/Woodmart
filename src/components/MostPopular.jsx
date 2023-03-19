import React from 'react'
import Slider from "react-slick";


var settings = {
  dots: false,
  infinite: false,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function MostPopular() {
  return (
    <div className="container">
      <div style={{ marginTop: 30 }}>
        <Slider {...settings}>
          {[
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image5"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image5"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image5"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image5"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image5"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image5"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image5"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image5"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image5"
            />,
          ].map((item, index) => {
            return (
              <div key={index}>
                <div style={{ fontSize: 20, textAlign: "center" }}>
                  {item}
                  CLOCKS
                  <br />
                  <p style={{ fontSize: 15, color: "orange" }}>$239.00</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  )
}

export default MostPopular