import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";
import Container from "../components/Container";

const CompareProduct = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet",
      price: 100,
      brand: "Havels",
      type: "Watch",
      availability: "In Stock",
      colors: ["red", "green", "blue"],
      sizes: ["S", "M"],
      image: "images/watch.jpg",
    },
    {
      id: 2,
      title: "Apple iPhone 13 Pro Max",
      price: 1299,
      brand: "Apple",
      type: "Phone",
      availability: "Out of Stock",
      colors: ["silver", "gold", "graphite"],
      sizes: ["64GB", "256GB", "1TB"],
      image: "images/watch.jpg",
    },
  ]);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                  onClick={() => handleDelete(product.id)}
                />
                <div className="product-card-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">{product.title}</h5>
                  <h6 className="price mb-3 mt-3">$ {product.price}</h6>

                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>{product.brand}</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>{product.type}</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>{product.availability}</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color colors={product.colors} />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        {product.sizes.map((size) => (
                          <p key={size}>{size}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
