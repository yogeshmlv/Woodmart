import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header>
        <div className="header-top-strip d-none d-md-block">
          <div className="container">
            <div className="d-flex bd-highlight mb-1 text-white ">
              <div className="me-auto p-2 bd-highlight">
                FREE SHIPPING FOR ALL ORDERS OF $150
              </div>
              <div className="p-2 bd-highlight">
                <p className="text-end text-white mb-0 d-flex align-items-center gap-2">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-linkedin"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-telegram"></i>
                  <i className="bi bi-pinterest"></i>
                </p>
              </div>
              <div className="p-2 bd-highlight">NEWSLETTER</div>
              <div className="p-2 bd-highlight">CONTACT US</div>
              <div className="p-2 bd-highlight">FAQS</div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-expand-lg navbar-dark header-top-strip">
          <div className="container py-2 gap-1">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <h2>
              <Link to="/" className="mb-0 text-white">
                <img src="images/wood-logo-white (1).svg" />
              </Link>
            </h2>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <div className="input-group w-75">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text  p-3" id="basic-addon2">
                  <BsSearch className="fs-9" />
                </span>
              </div>
              <div className=" text-white mb-0 d-flex align-items-start gap-2">
                <Link to="/login"><span className="px-4 custom">Login/Register</span>
                </Link>
                <Link to="/wishlist"><i className="bi bi-heart d-flex  align-items-center custom">
                  <span className="mb-2 item-number">0</span>
                </i>
                </Link>
                <Link to="compare-product"><i className="bi bi-arrow-left-right  d-flex  align-items-center custom">
                  <span className="mb-2 item-number">0</span>
                </i>
                </Link>
                <Link to="/cart">
                <i className="bi bi-handbag-fill  d-flex align-items-center custom">
                  <span className="mb-2 item-number">0</span>
                </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom py-3 d-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="menu-bottom d-flex align-items-center gap-3">
                  <div>
                    <div>
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle bg-transparent border-0"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="bi bi-list"></i>
                          <span> BROWSE CATEGORIES</span>
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <Link className="dropdown-item" to="">
                              Another action
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="">
                              Another action
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="">
                              Something else here
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="menu-links">
                    <div className="d-flex align-items-center gap-1">
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle bg-transparent border-0"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          HOME
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <NavLink to="/store" class="dropdown-item" href="#">
                              Action
                            </NavLink>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle bg-transparent border-0"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          SHOP
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle bg-transparent border-0"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          BLOG
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle bg-transparent border-0"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          PAGES
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle bg-transparent border-0"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ELEMENTS
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-7">BUY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
