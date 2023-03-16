import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ProductContext } from "../App";
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
  const productsItems = useContext(ProductContext)
  const [productsItemss, setProductsItemss] = useState([]);

  const addToCart = (item) => {
    const existingItem = productsItemss.find((productsItems) => productsItems.id === item.id);
    if (existingItem) {
      setProductsItemss(
        productsItemss.map((productsItems) =>
          productsItems.id === item.id ? { ...productsItems, quantity: productsItems.quantity + 1 } : productsItems
        )
      );
    } else {
      setProductsItemss([...productsItemss, { ...item, quantity: 1 }]);
    }
    localStorage.setItem("productsItemss", JSON.stringify(productsItemss));
  };
  const removeFromCart = (itemId) => {
    setProductsItemss(productsItemss.filter((productsItems) => productsItems.id !== itemId));
    localStorage.setItem("productsItemss", JSON.stringify(productsItemss));
  };
  useEffect(() => {
    const productsItemss = JSON.parse(localStorage.getItem("productsItemss")) || [];
    setProductsItemss(productsItemss);
  }, []);


  return (
    <div className="">
      <h3 className="heading">SALE PRODUCTS</h3>
      <hr />
      <div style={{ marginTop: 30 }}>
        <Slider {...settings}>
          {productsItems.map((productsItems) => {
            return (
              <div key={productsItems}>
                <div style={{ fontSize: 20, textAlign: "center" }}>
                  <img src={productsItems.image} alt={productsItems.name} className="image3" />
                  {productsItems.name}
                  <br />
                  <p style={{ fontSize: 15, color: "orange" }}>
                    ${productsItems.price}
                  </p>
                </div>
                <div className="d-flex flex-row gap-30">
                  <div className="d-flex flex-column">
                    <Link to="/cart" onClick={() => addToCart(productsItems)}>
                      <img src="images/add-cart.svg" alt="addcart" />
                    </Link>
                  </div>
                  <div className="d-flex flex-column">
                    <Link to="/cart" onClick={() => removeFromCart(productsItems.id)}>
                      <img src="images/prodcompare.svg" alt="removecart" />
                    </Link>

                  </div>
                  <div className="d-flex flex-column">
                    <Link to="/singleproduct">
                      <img src="images/view.svg" alt="addcart" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div style={{ marginTop: 30 }}>
        <Slider {...settings}>
          {productsItems.map((productsItems) => {
            return (
              <div key={productsItems}>
                <div style={{ fontSize: 20, textAlign: "center" }}>
                  <img src={productsItems.image} alt={productsItems.name} className="image3" />
                  {productsItems.name}
                  <br />
                  <p style={{ fontSize: 15, color: "orange" }}>
                    ${productsItems.price}
                  </p>
                </div>
                <div className="d-flex flex-row gap-30">
                  <div className="d-flex flex-column">
                  <Link to="/cart" onClick={() => addToCart(productsItems)}>
                      <img src="images/add-cart.svg" alt="addcart" />
                    </Link>
                  </div>
                  <div className="d-flex flex-column">
                  <Link to="/cart" onClick={() => removeFromCart(productsItems.id)}>
                      <img src="images/prodcompare.svg" alt="removecart" />
                    </Link>
                  </div>
                  <div className="d-flex flex-column">
                    <Link to="/singleproduct">
                      <img src="images/view.svg" alt="addcart" />
                    </Link>
                  </div>
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