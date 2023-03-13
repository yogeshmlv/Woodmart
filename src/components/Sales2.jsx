
import { Link } from "react-router-dom";
import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: false,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
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
const Sales2 = () => {

  return (
    <div className="">
      <h3 className="heading">
        SALE PRODUCTS</h3>
      <hr />
      <div style={{ marginTop: 30 }}>
        <Slider {...settings}>
          {[
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image3"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image3"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image3"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image3"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image3"
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
                <div className="d-flex flex-column ">
                  <Link to="/cart">
                    <img src="images/add-cart.svg" alt="addcart" />
                  </Link>
                </div>
                <div className="d-flex flex-column ">
                  <Link to="/compare-product">
                    <img src="images/prodcompare.svg" alt="addcart" />
                  </Link>
                </div>
                <div className="d-flex flex-column ">
                  <Link to="/singleproduct">
                    <img src="images/view.svg" alt="addcart" />
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div style={{ marginTop: 30 }}>
        <Slider {...settings}>
          {[
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image3"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image3"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image3"
            />,
            <img
              src="images/wood-portfolio-placeholder.jpg"
              alt="Mountain"
              className="image3"
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
                <div className="d-flex flex-column ">
                  <Link to="/cart">
                    <img src="images/add-cart.svg" alt="addcart" />
                  </Link>
                </div>
                <div className="d-flex flex-column ">
                  <Link to="/cart">
                    <img src="images/prodcompare.svg" alt="addcart" />
                  </Link>
                </div>
                <div className="d-flex flex-column ">
                  <Link to="/cart">
                    <img src="images/view.svg" alt="addcart" />
                  </Link>
                </div>
              </div>

            );
          })}
        </Slider>
      </div>

    </div>
  );
};


export default Sales2;