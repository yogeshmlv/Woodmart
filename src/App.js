import React,{createContext} from "react";
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
import Login from "./pages/User/Login";
import SignUp from "./pages/User/SignUp";
import Resetpassword from "./pages/User/Resetpassword";
import Forgotpassword from "./pages/User/Forgetpassword";
import CompareProduct from "./pages/CompareProduct";
import SingleProduct from "./pages/SingleProduct";
import UserProfile from "./pages/User/UserProfile";
import data from "./components/Api/data";

export  const ProductContext = createContext(data)

function App() {
      const {productItems} =data;
  return (
    <>
     <ProductContext.Provider value={productItems} >
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
            <Route path="user-profile" element={<UserProfile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ProductContext.Provider>
    </>
  );
}

export default App;
