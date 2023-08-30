import React from "react";
import "./Navbar.css";
import img1 from "../Photos/ba1.jpg";
import img2 from "../Photos/ba2.jpg";
import img3 from "../Photos/ba3.jpg";
import img4 from "../Photos/ba4.jpg";
import Book from "./Book";

const Slider = () => {
  return (
    <>
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
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              className="slider_image"
              src={img1}
              class="d-block w-100"
              alt="1"
            />
            <div class="carousel-caption d-none d-md-block">
              <h6>JOURNEY</h6>
              <h1>Exploring The World</h1>
              <p>
                Once aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur consectetur adipiscing
                elit.
              </p>
              <button className="learn_btn">Learn More</button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              className="slider_image"
              src={img2}
              class="d-block w-100"
              alt="2"
            />
            <div class="carousel-caption d-none d-md-block">
              <h6>GREAT EXPERIENCE</h6>
              <h1>For Traveling Anywhere</h1>
              <p>
                Once aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur consectetur adipiscing
                elit.
              </p>
              <button className="learn_btn">Learn More</button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              className="slider_image"
              src={img3}
              class="d-block w-100"
              alt="3"
            />
            <div class="carousel-caption d-none d-md-block">
              <h6>ENJOY</h6>
              <h1>Your Dream Vacation</h1>
              <p>
                Once aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur consectetur adipiscing
                elit.
              </p>
              <button className="learn_btn">Learn More</button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              className="slider_image"
              src={img4}
              class="d-block w-100"
              alt="4"
            />
            <div class="carousel-caption d-none d-md-block">
              <h6>WHAT NEXT COUNTRY?</h6>
              <h1>Discover Night Francisco</h1>
              <p>
                Once aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur consectetur adipiscing
                elit.
              </p>
              <button className="learn_btn">Learn More</button>
            </div>
          </div>
        </div>
        {/* <button
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
      </button> */}
      </div>
      <Book />
    </>
  );
};

export default Slider;
