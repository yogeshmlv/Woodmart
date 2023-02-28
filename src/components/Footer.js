import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
        <div className="row">
            <div className="col-3 d-flex align-items-center gap-30 text-white">
            <img src="images/cart.svg" alt="cart" />
            <div>
                <h6>Free Shipping</h6>
                <p>All order Delivery Free </p>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center gap-30 text-white">
            <img src="images/cart.svg" alt="cart" />
              <div>
                <h6>24/7 Support</h6>
                <p>It has survived not only</p>
                </div>
            </div>
            <div className="col-3 d-flex align-items-center gap-30 text-white">
            <img src="images/cart.svg" alt="cart" />
            <div>
                <h6>Online Payments</h6>
                <p>All Payment are Secured</p>
                </div>
            </div>
            <div className="col-3 d-flex align-items-center gap-30 text-white">
            <img src="images/cart.svg" alt="cart" />
            <div>
                <h6>Affortable Prices</h6>
                <p>Get Factory Default Price</p>
                </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
          <div className="col-2">
              <h4 className="text-white mb-4">OUR STORES</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                New York
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                London SF
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                Cockfosters BP
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                Los Angeles
                </Link>
                <Link className="text-white py-2 mb-1">Chicago</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">USEFUL LINKS</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">AVAILABLE ON:</h4>
              <img src="images/google-play-button.png.webp" alt="cart" />
              <div className="text-white mt-4">Join our newsletter!</div>
              <div className="">
        <div className="input-group">
          <input
            type="text"
            className="form-control py-2"
            placeholder="Your Email.."
            aria-label="Your Email.."
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text p-3" id="basic-addon2">
            <BsSearch className="fs-9" />
          </span>
        </div>
      </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 ">
        <div className="container-xxl">
          <div className="row">
          <div className="col-3">
              <h6 className="text-white mb-4">Payment System:</h6>
              <img src="images/wood-portfolio-placeholder-303x24.jpg"/>
            </div>
            <div className="col-3">
              <h6 className="text-white mb-4">Shipping System:</h6>
              <img src="images/wood-portfolio-placeholder-303x24.jpg"/>
              
            </div>
            <div className="col-3">
              <h6 className="text-white mb-4">Our Social Links:</h6>
              <div className="col-1">
              <p className="text-end text-white mb-0 d-flex align-items-center gap-15">
                <i class="bi bi-facebook"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-telegram"></i>
                <i className="bi bi-pinterest"></i>
              </p>
            </div>
              
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Aidigitek Pvt.Ltd
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;