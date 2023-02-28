import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const BlogCard = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
      <h3 className="heading">
        OUR BLOG
        <hr />
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
    </>
  );
};

export default BlogCard;
