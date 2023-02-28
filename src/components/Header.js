import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip d-none d-md-block">
        <div class="d-flex bd-highlight mb-1 text-white">
          <div class="me-auto p-2 bd-highlight">
            FREE SHIPPING FOR ALL ORDERS OF $150
          </div>
          <div class="p-2 bd-highlight">
            <p className="text-end text-white mb-0 d-flex align-items-center gap-15">
              <i class="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-telegram"></i>
              <i className="bi bi-pinterest"></i>
            </p>
          </div>
          <div class="p-2 bd-highlight">NEWSLETTER</div>
          <div class="p-2 bd-highlight">CONTACT US</div>
          <div class="p-2 bd-highlight">FAQS</div>
        </div>
      </header>
      <header class="navbar navbar-expand-lg navbar-dark header-top-strip  ">
        <div class="container-fluid py-2 gap-30 ">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <h2>
            <Link className="mb-0 text-white">
              <img src="images/wood-logo-white (1).svg" />
            </Link>
          </h2>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text  p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className=" d-flex align-items-center justify-content-between">
              <Link className="d-flex align-items-center gap-10 text-white">
                <img className="img" src="images/compare.svg" alt="compare" />
                <p className="mb-0">
                  Compare <br /> Products
                </p>
              </Link>
            </div>
            <div>
              <Link className="d-flex align-items-center gap-10 text-white">
                <img className="img" src="images/wishlist.svg" alt="wishlist" />
                <p className="mb-0">
                  Favourite <br /> wishlist
                </p>
              </Link>
            </div>
            <div>
              <Link className="d-flex align-items-center gap-10 text-white">
                <img className="img" src="images/user.svg" alt="user" />
                <p className="mb-0">
                  Login <br />
                  My Account
                </p>
              </Link>
            </div>
            <div>
              <Link className="d-flex align-items-center gap-10 text-white">
                <img className="img" src="images/cart.svg" alt="cart" />
                <div className="d-flex flex-column gap-10">
                  <span className="badge bg-white text-dark">0</span>
                  <p className="mb-0">$ 500</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3 d-none d-md-block">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
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
                  <div className="d-flex align-items-center gap-10">
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
                    <div className="col-4">SPECIAL OFFER</div>
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
