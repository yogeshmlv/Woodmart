import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import OurStore from "./pages/OurStore";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgetpassword";
import CompareProduct from "./pages/CompareProduct";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="store" element={<OurStore />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="singleproduct" element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
