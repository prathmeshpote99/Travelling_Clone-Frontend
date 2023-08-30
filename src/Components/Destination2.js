import React, { lazy } from "react";
import { Link } from "react-router-dom";
import bg1_img from "../Photos/bg1.jpg";
import a1 from "../Photos/a1.jpg";
import Package1 from "../Photos/package1.jpg";
import Package2 from "../Photos/package2.jpg";
import Package3 from "../Photos/package3.jpg";
import Package4 from "../Photos/package4.jpg";
import Package5 from "../Photos/package5.jpg";
import "./Navbar.css";

const Team = lazy(() => import("../Components/Team"));

const Destination2 = () => {
  return (
    <>
      <div className="second">
        <img className="bg1_img" src={bg1_img} alt="bg" />
        <div className="heading">
          <h2 className="head1">Buy a Tour Without Leaving Your Home</h2>
          <p>
            Using our website, you can easily find and book any tour you want.
            Mobile <br />
            users will definitely enjoy our app available on all devices.
          </p>
          <button id="book_btn" className="book_submit_btn">
            Book Now
          </button>
        </div>
      </div>
      <div className="container waytotravel">
        <div className="row">
          <img className="col-md-6" src={a1} alt="a1" />
          <div className=" col-md-6">
            <h1>Explore A Different Way To Travel</h1>
            <p className="para">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </p>
            <button id="book_btn" className="book_submit_btn">
              More
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="ticketsandbookings row">
            <div className="col-md-4">
              <div className="icons">
                <i class="ic-ons fa fa-plane fa-2xl" />
              </div>
              <h3>Air Tickets</h3>
              <p>
                In such lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiud tempor.
              </p>
              <Link className="more_link" to="/">
                Read More
              </Link>
            </div>
            <div className="col-md-4">
              <div className="icons">
                <i class="ic-ons fa-solid fa-thumbs-up fa-2xl"></i>
              </div>
              <h3>Tourist Guide</h3>
              <p>
                Ncididunt ut labore et dolore magna minim veniam, quis nostrud
                exercitation ullamco.
              </p>
              <Link className="more_link" to="/">
                Read More
              </Link>
            </div>
            <div className="col-md-4">
              <div className="icons">
                <i class="ic-ons fa fa-bed fa-2xl" />
              </div>
              <h3>Hotel Bookings</h3>
              <p>
                Duis aute irure dolor in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <Link className="more_link" to="/">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 pack1">
            <img className="pack" src={Package1} alt="p1" />
            <hr />
            <h5 className="destinations_name">Italy, Venice</h5>
            <p>Starting at $45,99</p>
          </div>
          <div className="col-md-2 pack1">
            <img className="pack" src={Package2} alt="p2" />
            <hr />
            <h5 className="destinations_name">Paris, France</h5>
            <p>Starting at $40,99</p>
          </div>
          <div className="col-md-2 pack1">
            <img className="pack" src={Package3} alt="p3" />
            <hr />
            <h5 className="destinations_name">Island, Africa</h5>
            <p>Starting at $24,99</p>
          </div>
          <div className="col-md-2 pack1">
            <img className="pack" src={Package4} alt="p4" />
            <hr />
            <h5 className="destinations_name">Benidorm, Spain</h5>
            <p>Starting at $19,99</p>
          </div>
          <div className="col-md-2 pack1">
            <img className="pack" src={Package5} alt="p5" />
            <hr />
            <h5 className="destinations_name">Bangkok, Thailand</h5>
            <p>Starting at $39,99</p>
          </div>
        </div>
      </div>
      <div className="container-fluid experience">
        <div className="row">
          <div className="col-md-4 contries side_border">
            <h1 className="experience_heading">36</h1>
            <h6>Contries</h6>
          </div>
          <div className="col-md-4 contries side_border">
            <h1 className="experience_heading">15 YEARS</h1>
            <h6>Experience</h6>
          </div>
          <div className="col-md-4 contries">
            <h1 className="experience_heading">950</h1>
            <h6>Airlines</h6>
          </div>
        </div>
      </div>
      <Team />
    </>
  );
};

export default Destination2;
