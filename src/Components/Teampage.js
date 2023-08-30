import React from "react";
import { Link } from "react-router-dom";
import Team from "./Team";
import Inner from "../Photos/inner2.jpg";

const Teampage = () => {
  return (
    <div>
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
          <li className="active item2" aria-current="page">
            Pages<i class="fa-solid fa-angle-right text-white" id="end"></i>
          </li>
          <li className="breadcrumb-item active item2" aria-current="page">
            Team
          </li>
        </ol>
      </nav>
      <Team />
    </div>
  );
};

export default Teampage;
