import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const BlogCard = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
     <div className="container">
      <h3 className="heading">
        OUR BLOG
        <hr/>
      </h3>
     
      <Slider {...settings}>
        <div className="col-3">
          <div className="blog-card">
            <div className="card-image">
              <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
            </div>
            <div className="blog-content">
              <p className="date">28 Feb,2023</p>
              <h5 className="title"> A beautiful sunday morning renaissance</h5>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam pariatur quae id quaerat culpa et impedit quibusdam veniam, mollitia possimus aut, quam sed in aspernatur sit praesentium nostrum cum!
              </p>
              <Link className="button1">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="blog-card">
            <div className="card-image">
              <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
            </div>
            <div className="blog-content">
              <p className="date">28 Feb,2023</p>
              <h5 className="title"> A beautiful sunday morning renaissance</h5>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam pariatur quae id quaerat culpa et impedit quibusdam veniam, mollitia possimus aut, quam sed in aspernatur sit praesentium nostrum cum!
              </p>
              <Link className="button1">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="blog-card">
            <div className="card-image">
              <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
            </div>
            <div className="blog-content">
              <p className="date">1 Dec,2022</p>
              <h5 className="title"> A beautiful sunday morning renaissance</h5>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam pariatur quae id quaerat culpa et impedit quibusdam veniam, mollitia possimus aut, quam sed in aspernatur sit praesentium nostrum cum!
              </p>
              <Link className="button1">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="blog-card">
            <div className="card-image">
              <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
            </div>
            <div className="blog-content">
              <p className="date">1 Dec,2022</p>
              <h5 className="title"> A beautiful sunday morning renaissance</h5>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam pariatur quae id quaerat culpa et impedit quibusdam veniam, mollitia possimus aut, quam sed in aspernatur sit praesentium nostrum cum!
              </p>
              <Link className="button1">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="blog-card">
            <div className="card-image">
              <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
            </div>
            <div className="blog-content">
              <p className="date">1 Dec,2022</p>
              <h5 className="title"> A beautiful sunday morning renaissance</h5>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam pariatur quae id quaerat culpa et impedit quibusdam veniam, mollitia possimus aut, quam sed in aspernatur sit praesentium nostrum cum!
              </p>
              <Link className="button1">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="blog-card">
            <div className="card-image">
              <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
            </div>
            <div className="blog-content">
              <p className="date">1 Dec,2022</p>
              <h5 className="title"> A beautiful sunday morning renaissance</h5>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam pariatur quae id quaerat culpa et impedit quibusdam veniam, mollitia possimus aut, quam sed in aspernatur sit praesentium nostrum cum!
              </p>
              <Link className="button1">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </Slider>
      </div>
    </>
  );
};

export default BlogCard;
