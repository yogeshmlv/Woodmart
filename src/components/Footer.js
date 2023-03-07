import React from "react";
import { BsSearch } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="">
          <div class="py-4 footer1">
            <div class="container">
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div class="col d-flex align-items-center text-white">
                  <img src="images/cart.svg" alt="cart" class="me-3" />
                  <div>
                    <h6 class="mb-0">Free Shipping</h6>
                    <p class="mb-0  header-text">All orders ship for free</p>
                  </div>
                </div>
                <div class="col d-flex align-items-center text-white">
                  <img src="images/cart.svg" alt="cart" class="me-3" />
                  <div>
                    <h6 class="mb-0">24/7 Support</h6>
                    <p class="mb-0 f header-text">We're here to help</p>
                  </div>
                </div>
                <div class="col d-flex align-items-center text-white">
                  <img src="images/cart.svg" alt="cart" class="me-3" />
                  <div>
                    <h6 class="mb-0">Online Payments</h6>
                    <p class="mb-0 header-text">All payments are secure</p>
                  </div>
                </div>
                <div class="col d-flex align-items-center text-white">
                  <img src="images/cart.svg" alt="cart" class="me-3" />
                  <div>
                    <h6 class="mb-0">Affordable Prices</h6>
                    <p class="mb-0 header-text">Get factory prices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="py-4 footer1">
            <div class="container">
              <div class="row gy-4">
                <div class="col-lg-2 col-md-4">
                  <h6 class="text-white mb-4">OUR STORES</h6>
                  <div class="footer-link d-flex flex-column">
                    <a href="/privacy-policy" class="text-white py-2">
                      New York
                    </a>
                    <a href="/refund-policy" class="text-white py-2">
                      London SF
                    </a>
                    <a href="/shipping-policy" class="text-white py-2">
                      Cockfosters BP
                    </a>
                    <a href="/term-conditions" class="text-white py-2">
                      Los Angeles
                    </a>
                    <a href="#" class="text-white py-2">
                      Chicago
                    </a>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4">
                  <h6 class="text-white mb-4">USEFUL LINKS</h6>
                  <div class="footer-link d-flex flex-column">
                    <a href="/privacy-policy" class="text-white py-2">
                      Privacy Policy
                    </a>
                    <a href="/refund-policy" class="text-white py-2">
                      Refund Policy
                    </a>
                    <a href="/shipping-policy" class="text-white py-2">
                      Shipping Policy
                    </a>
                    <a href="/term-conditions" class="text-white py-2">
                      Terms &amp; Conditions
                    </a>
                    <a href="#" class="text-white py-2">
                      Blogs
                    </a>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4">
                  <h6 class="text-white mb-4">Account</h6>
                  <div class="footer-link d-flex flex-column">
                    <a href="#" class="text-white py-2">
                      About Us
                    </a>
                    <a href="#" class="text-white py-2">
                      FAQ
                    </a>
                    <a href="#" class="text-white py-2">
                      Contact
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 ">
                  <h6 class="text-white mb-4 ">Quick Links</h6>
                  <div class="footer-link d-flex flex-column">
                    <a href="#" class="text-white py-2 ">
                      Laptops
                    </a>
                    <a href="#" class="text-white py-2 ">
                      Headphones
                    </a>
                    <a href="#" class="text-white py-2 ">
                      Tablets
                    </a>
                    <a href="#" class="text-white py-2 ">
                      Watch
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-8">
                  <div className="row gx-3">
                    <div className="col-md-9">
                      <h6 className="text-white mb-4">AVAILABLE ON:</h6>
                      <img
                        src="images/google-play-button.png.webp"
                        alt="google play"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="col-lg-4-md-8">
                    <h6 className="text-white mb-4">Join our newsletter!</h6>

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
          </div>
          <div class="py-4 footer1">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-4">
                  <h6 class="text-white mb-4">Payment System:</h6>
                  <img
                    src="images/wood-portfolio-placeholder-303x24.jpg"
                    class="img-fluid"
                    alt="Payment System"
                  />
                </div>
                <div class="col-12 col-md-4">
                  <h6 class="text-white mb-4">Shipping System:</h6>
                  <img
                    src="images/wood-portfolio-placeholder-303x24.jpg"
                    class="img-fluid"
                    alt="Shipping System"
                  />
                </div>
                <div class="col-12 col-md-4">
                  <h6 class="text-white mb-4">Our Social Links:</h6>
                  <div class="d-flex align-items-center justify-content-center justify-content-md-start gap-3 gap-md-0">
                    <a href="#" class="text-white p-3">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="text-white p-3">
                      <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="#" class="text-white p-3">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#" class="text-white p-3">
                      <i class="bi bi-telegram"></i>
                    </a>
                    <a href="#" class="text-white p-3">
                      <i class="bi bi-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 footer1">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p className="text-center mb-0 text-white">
                    &copy; {new Date().getFullYear()} Powered by Aidigitek
                    Pvt.Ltd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
