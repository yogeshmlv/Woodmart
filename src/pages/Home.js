import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import FurnitureProduct from "../components/FurnitureProduct";
import Marque from "../components/Marque";
import SpecialProduct from "../components/SpecialProduct";
const Home = () => {
  return (
    <>
      <section>
        {" "}
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            >
              <div className="number">01</div>
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              <div className="number">02</div>
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
              <div className="number">03</div>
            </button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="images/main-banner.jpg"
                class="d-block w-100"
                alt="..."
                style={{ height: 600 }}
                className="carousel-inner1"
              />
              <div class="carousel-caption">
                <h6>COATED ALUMINUM FRAME</h6>
                <p>
                  Reddington 6-Piece Set Furniture Sectional Living Room Sofa.
                </p>
                <div className="slider-btn">
                  <button className="btn btn-1">VIEW MORE</button>
                  <button className="btn btn-2">TO SHOP</button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="images/main-banner.jpg"
                class="d-block w-100"
                alt="..."
                style={{ height: 600 }}
                className="carousel-inner1"
              />
              <div class="carousel-caption">
                <h6>COATED ALUMINUM FRAME</h6>
                <p>
                  Reddington 6-Piece Set Furniture Sectional Living Room Sofa.
                </p>
                <div className="slider-btn">
                  <button className="btn btn-1">VIEW MORE</button>
                  <button className="btn btn-2">TO SHOP</button>
                </div>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section>
        <SpecialProduct />
      </section>
      <section className="py-4 name pe-200">
  <div className="container-xxl">
    <div className="row">
      <div className="col-sm-6 col-lg-3 d-flex align-items-center gap-30 text-black">
        <span className="span1">1.</span>
        <div>
          <h6>Home Delivery.</h6>
          <p>The European languages.</p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 d-flex align-items-center gap-30 text-black">
        <span  className="span1">2.</span>
        <div>
          <h6>Order As a Gift.</h6>
          <p>Donec odio etiam sceles.</p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 d-flex align-items-center gap-30 text-black">
        <span  className="span1">3.</span>
        <div>
          <h6>High Quality.</h6>
          <p>Curabitur hac hac maece.</p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 d-flex align-items-center gap-30 text-black">
        <span  className="span1">4.</span>
        <div>
          <h6>Buy With Joy.</h6>
          <p>Ullamcorper magna nec.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section>
        <FurnitureProduct />
      </section>
      <section>
        <Marque />
      </section>
      <section>
        <BlogCard />
      </section>
    </>
  );
};

export default Home;
