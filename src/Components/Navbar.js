import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <i class="fa fa-search" />
              Travelling
            </Link>
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
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    className={`nav-link text-dark text-decoration-none 
                    ${activeButton === "button1" ? "active1" : ""}`}
                    aria-current="page"
                    to="/"
                    onClick={() => handleClick("button1")}
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={`nav-link text-dark text-decoration-none 
                    ${activeButton === "button2" ? "active1" : ""}`}
                    aria-current="page"
                    to="/about"
                    onClick={() => handleClick("button2")}
                  >
                    About
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    className={`nav-link text-dark dropdown-toggle text-decoration-none 
                    ${activeButton === "button3" ? "active1" : ""}`}
                    aria-current="page"
                    to="/"
                    onClick={() => handleClick("button3")}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <ul class="dropdown-menu">
                    {/* <li>
                    <Link class="dropdown-item" to="/">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/">
                      Pricing
                    </Link>
                  </li> */}
                    <li>
                      <Link class="dropdown-item" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/team">
                        Team
                      </Link>
                    </li>
                    {/* <li>
                    <Link class="dropdown-item" to="/">
                      Team Member
                    </Link>
                  </li> */}
                  </ul>
                </li>
                {/* <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/">
                      Blog Posts
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/">
                      Blog Single
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/">
                      Ecommmerce
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/">
                      Ecommmerce Single
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/">
                      Ecommmerce Cart
                    </Link>
                  </li>
                </ul>
              </li> */}
                <li class="nav-item">
                  <Link
                    className={`nav-link text-dark text-decoration-none 
                    ${activeButton === "button4" ? "active1" : ""}`}
                    aria-current="page"
                    to="/contact"
                    onClick={() => handleClick("button4")}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <button className="book_btn book2">
                    <Link className="book2" to="/book1">
                      Book Now
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
