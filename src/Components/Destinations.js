import React from "react";
import "./Navbar.css";
import Paris from "../Photos/grid1.jpg";
import Thailand from "../Photos/grid2.jpg";
import Greece from "../Photos/grid3.jpg";
import Spain from "../Photos/grid4.jpg";
import Chaina from "../Photos/grid5.jpg";
import Iceland from "../Photos/grid6.jpg";
import Destination2 from "./Destination2";

const Destinations = () => {
  return (
    <>
      <div className="container">
        <div className="destination_headings">
          <h1>Popular Destination</h1>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="grid_images" src={Paris} alt="paris_img" />
            <h5>Paris</h5>
          </div>
          <div className="col-md-4">
            <img className="grid_images" src={Thailand} alt="thailand_img" />
            <h5>Thailand</h5>
          </div>
          <div className="col-md-4">
            <img className="grid_images" src={Greece} alt="greece_img" />
            <h5>Greece</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="grid_images" src={Spain} alt="spain_img" />
            <h5>Spain</h5>
          </div>
          <div className="col-md-4">
            <img className="grid_images" src={Chaina} alt="chaina_img" />
            <h5>Chaina</h5>
          </div>
          <div className="col-md-4">
            <img className="grid_images" src={Iceland} alt="iceland_img" />
            <h5>Iceland</h5>
          </div>
        </div>
      </div>
      <Destination2 />
    </>
  );
};

export default Destinations;
