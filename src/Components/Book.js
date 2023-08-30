import React from "react";
import "./Navbar.css";
import Destinations from "./Destinations";

const Book = () => {
  return (
    <>
      <div className="container">
        <div className="book">
          <div className="book_innner">
            <p className="book_p">
              Get the Best Holiday Planned by Experts!
              <span>
                <b>Tel:</b> +1-800-999-800
              </span>
            </p>
          </div>
          <div className="input_div">
            <ul className="book_list">
              <li className="bool_list_li">
                <input type="text" placeholder="Your Name" />
              </li>
              <li className="bool_list_li">
                <input type="email" placeholder="Eamil" />
              </li>
              <li className="bool_list_li">
                <input type="number" placeholder="Mobile Number" />
              </li>
              <li className="bool_list_li">
                <input type="date" />
              </li>
              <li className="bool_list_li">
                <button className="book_submit_btn" type="submit">
                  Submit
                </button>
              </li>
            </ul>
            <p className="book_p2">
              By submitting this form, you authorize Travel and its partners to
              contact you for this enquiry.
            </p>
          </div>
        </div>
      </div>
      <Destinations />
    </>
  );
};

export default Book;
