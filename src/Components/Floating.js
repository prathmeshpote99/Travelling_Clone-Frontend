import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Floating = () => {
  return (
    <>
      <div id="floating_div">
        <div class="floating_containt">
          <Link id="back" to="/about">
            <i id="forward" class="fa-solid fa-angles-right"></i>
          </Link>
          <hr class="forward_hr" />
          <div id="back">
            <Link id="back" to="/">
              <i class="fa-solid fa-arrow-left"></i>
              <br />
              <label class="floating_label" for="back">
                Back
              </label>
            </Link>
          </div>
          <div id="download">
            <Link id="download" to="/book1">
              <i class="fa-solid fa-download"></i>
              <br />
              <label class="floating_label" for="download">
                Download
              </label>
            </Link>
          </div>
          <div id="buy">
            <i class="fa-solid fa-cart-shopping"></i>
            <br />
            <label class="floating_label" for="buy">
              Buy
            </label>
          </div>
        </div>
      </div>
      <div className="top">
        <a href="#carouselExampleCaptions">
          <i class="fa-solid fa-chevron-up" />
        </a>
      </div>
    </>
  );
};

export default Floating;
