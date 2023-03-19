import React, { useState } from "react";
import BreadCrumb from "../Core/BreadCrumb";
import Meta from "../Core/Meta";
import Container from "../Core/Container";

const Wishlist = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet",
      price: 100,
      image: "images/watch.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "images/watch.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "images/watch.jpg",
    },
  ]);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="wishlist-card position-relative">
                <button
                  className="position-absolute cross img-fluid"
                  onClick={() => handleDelete(product.id)}
                >
                  <img src="images/cross.svg" alt="cross" />
                </button>
                <div className="wishlist-card-image">
                  <img
                    src={product.image}
                    className="img-fluid w-100"
                    alt={product.name}
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">{product.name}</h5>
                  <h6 className="price">$ {product.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
