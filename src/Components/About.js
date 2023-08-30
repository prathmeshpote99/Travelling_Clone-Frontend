import React, { lazy } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image1 from "../Photos/ab-inner.jpg";
import image2 from "../Photos/about1.jpg";
import image3 from "../Photos/about2.jpg";

const Team = lazy(() => import("../Components/Team"));

const about = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black" }}>
        <img src={image1} alt="1" className="bread1" />
      </div>
      <nav className="bread" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li>
            <Link to="/" className="item1">
              Home<i class="fa-solid fa-angle-right text-white" id="end"></i>
            </Link>
          </li>
          <li className="breadcrumb-item active item2" aria-current="page">
            About
          </li>
        </ol>
      </nav>
      <div className="container-fluid at1">
        <div className="row">
          <h1 className="h_at1">
            We are with you at every stage of your journey
          </h1>
          <p className="p_at1">
            Every journey can be amazing, whether it's to far-off lands or a
            nearby city break. Here we gather unique deals all in one place,
            making it even easier to find your dream offer.
          </p>
          <div className="col-md-6 plan2 ">
            <img src={image2} alt="1" className="bread2" />
            <div className="plan1">
              <h3 className="h_we1">You plan, we help</h3>
              <p className="p_we1">
                Travel means more than just getting there. You might need a
                hotel room and ect., Sleep easy, we'll work everything out
                together.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={image3} alt="1" className="bread2" />
            <div className="plan1">
              <h3 className="h_we1">We care about you</h3>
              <p className="p_we1">
                No matter where you are, no matter what goes wrong, we're here
                to support you with our experience. We're only a phone call
                away.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team />
    </div>
  );
};

export default about;
