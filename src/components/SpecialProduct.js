import React from "react";
import Slider from "react-slick";
const SpecialProduct = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  return (
    <>
      <div className="container">
        <h3 className="heading">
          TOP CATEGERIES</h3>
          <hr />
        <div style={{ marginTop: 30 }}>
          <Slider {...settings}>
            {[
              <img
                src="images/wood-portfolio-placeholder.jpg"
                alt="Mountain"
                className="image2"
              />,
              <img
                src="images/wood-portfolio-placeholder.jpg"
                alt="Mountain"
                className="image2"
              />,
              <img
                src="images/wood-portfolio-placeholder.jpg"
                alt="Mountain"
                className="image2"
              />,
              <img
                src="images/wood-portfolio-placeholder.jpg"
                alt="Mountain"
                className="image2"
              />,
              <img
                src="images/wood-portfolio-placeholder.jpg"
                alt="Mountain"
                className="image2"
              />,
              <img
                src="images/wood-portfolio-placeholder.jpg"
                alt="Mountain"
                className="image2"
              />,
              <img
                src="images/wood-portfolio-placeholder.jpg"
                alt="Mountain"
                className="image2"
              />,
              <img
                src="images/wood-portfolio-placeholder.jpg"
                alt="Mountain"
                className="image2"
              />,
              <img
                src="images/wood-portfolio-placeholder.jpg"
                alt="Mountain"
                className="image2"
              />,
            ].map((item, index) => {
              return (
                <div key={index}>
                  <div style={{ fontSize: 20, textAlign: "center" }}>
                    {item}
                    CLOCKS
                    <br />
                    <p style={{ fontSize: 15 }}>1 Product</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
