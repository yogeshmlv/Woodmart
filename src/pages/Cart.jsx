import React from "react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../Core/Container";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Watch",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Shirt",
      price: 50,
      quantity: 2,
    },
  ]);

  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-1 d-flex align-items-center">
                  <div className="w-25">
                    <img src="images/watch.jpg" className="img-fluid" alt="product image" />
                  </div>
                  <div className="w-75">
                    <p>{item.name}</p>
                    <p>Size: hgf</p>
                    <p>Color: gfd</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ {item.price}</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-1">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      id=""
                      value={item.quantity}
                    />
                  </div>
                  <div>
                    <AiFillDelete
                      className="text-danger "
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ {item.price * item.quantity}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              {/* <Link to="/product" className="button">
                Continue To Shopping
              </Link> */}
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};


export default Cart;