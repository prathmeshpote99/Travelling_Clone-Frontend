import React from "react";
import "./Navbar.css";
import img1 from "../Photos/ba1.jpg";
import img2 from "../Photos/ba2.jpg";
import img3 from "../Photos/ba3.jpg";
import img4 from "../Photos/ba4.jpg";
import bggallery from "../Photos/gallery-bg.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <img src={bggallery} alt="1" className="bread1" />
      </div>
      <nav className="bread" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li>
            <Link to="/" className="item1">
              Home<i class="fa-solid fa-angle-right text-white" id="end"></i>
            </Link>
          </li>
          <li className="active item2" aria-current="page">
            Pages<i class="fa-solid fa-angle-right text-white" id="end"></i>
          </li>
          <li className="breadcrumb-item active item2" aria-current="page">
            Gallery
          </li>
        </ol>
      </nav>
      <div className="container gallery_div">
        <div className="row">
          <img className="col-md-6" src={img1} alt="a" />
          <img className="col-md-6" src={img2} alt="aa" />
        </div>
        <div className="row">
          <img className="col-md-6" src={img3} alt="a" />
          <img className="col-md-6" src={img4} alt="aa" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
