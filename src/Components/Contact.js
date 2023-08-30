import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Inner from "../Photos/inner2.jpg";

const Contact = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <img src={Inner} alt="1" className="bread1" />
      </div>
      <nav className="bread" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li>
            <Link to="/" className="item1">
              Home<i class="fa-solid fa-angle-right text-white" id="end"></i>
            </Link>
          </li>
          <li className="breadcrumb-item active item2" aria-current="page">
            Contact
          </li>
        </ol>
      </nav>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d846569.3795064108!2d-118.41173199999999!3d34.020479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1678423996952!5m2!1sen!2sus"
          width="100%"
          height="600"
          style={{ border: "0", marginTop: "0px", position: "relative" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map1"
        ></iframe>
        <div className="contact_form">
          <h2>Contact</h2>
          <p>We want to hear from you</p>
          <ul className="contact_form_ul">
            <li className="contact_form_li">
              <input
                className="contact_form_input"
                type="text"
                placeholder="Name"
              />
            </li>
            <li className="contact_form_li">
              <input
                className="contact_form_input"
                type="email"
                placeholder="Email"
              />
            </li>
            <li className="contact_form_li">
              <input
                className="contact_form_input"
                type="text"
                placeholder="Message"
              />
            </li>
            <li className="contact_form_li">
              <button
                className="btn btn-danger contact_form_input"
                type="submit"
              >
                Send Now
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact2_div">
        <ul className="contact2_div_ul">
          <h5>Visit Us</h5>
          <li className="contact2_div_li">The company name</li>
          <li className="contact2_div_li">Addison Township, 2nd floor,</li>
          <li className="contact2_div_li">California, USA.</li>
        </ul>
        <ul className="contact2_div_ul">
          <h5>Contact Us</h5>
          <li className="contact2_div_li">+1-800-999-800</li>
          <li className="contact2_div_li">+7-800-999-800</li>
          <li className="contact2_div_li">mail@example.com</li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
