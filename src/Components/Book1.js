import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Inner from "../Photos/inner2.jpg";

import axios from "axios";

const Book1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [adults, setAdults] = useState();
  const [childrens, setChildrens] = useState();
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      Name: name,
      Email: email,
      From: from,
      To: to,
      Adults: adults,
      Childrens: childrens,
      Password: password,
    };
    axios.post("http://localhost:7000/travelling/add", newData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

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
            Book
          </li>
        </ol>
      </nav>
      <div class="form-body">
        <div class="row">
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <div className="contact2">
                  <h1 className="contactH2">Booking Form</h1>
                  <p className="contactP2">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <form
                  class="requires-validation"
                  onSubmit={handleSubmit}
                  novalidate
                >
                  <div class="col-md-12">
                    <label>Name</label>
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <div class="valid-feedback">Username field is valid!</div>
                    <div class="invalid-feedback">
                      Username field cannot be blank!
                    </div>
                  </div>

                  <div class="col-md-12">
                    <label>Email </label>
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div class="valid-feedback">Email field is valid!</div>
                    <div class="invalid-feedback">
                      Email field cannot be blank!
                    </div>
                  </div>

                  <div class="col-md-12">
                    <label>From</label>
                    <select
                      class="form-select mt-3"
                      onChange={(e) => setFrom(e.target.value)}
                      required
                    >
                      <option value=" ">select countey</option>
                      <option value="India">India</option>
                      <option value="Australia">Australia</option>
                      <option value="Mali">Mali</option>
                    </select>
                    <div class="valid-feedback">You selected a position!</div>
                    <div class="invalid-feedback">
                      Please select a position!
                    </div>
                  </div>
                  <div class="col-md-12">
                    <label>To</label>
                    <select
                      class="form-select mt-3"
                      onChange={(e) => setTo(e.target.value)}
                      required
                    >
                      <option value=" ">select countey</option>
                      <option value="India">India</option>
                      <option value="Australia">Australia</option>
                      <option value="Mali">Mali</option>
                    </select>
                    <div class="valid-feedback">You selected a position!</div>
                    <div class="invalid-feedback">
                      Please select a position!
                    </div>
                  </div>
                  <div class="col-md-12">
                    <label>Adults</label>
                    <select
                      class="form-select mt-3"
                      onChange={(e) => setAdults(e.target.value)}
                      required
                    >
                      <option value={1}>01</option>
                      <option value={2}>02</option>
                      <option value={3}>03</option>
                      <option value={4}>04</option>
                    </select>
                    <div class="valid-feedback">You selected a position!</div>
                    <div class="invalid-feedback">
                      Please select a position!
                    </div>
                  </div>

                  <div class="col-md-12">
                    <label>Children</label>
                    <select
                      class="form-select mt-3"
                      onChange={(e) => setChildrens(e.target.value)}
                      required
                    >
                      <option value={1}>01</option>
                      <option value={2}>02</option>
                      <option value={3}>03</option>
                      <option value={4}>04</option>
                    </select>
                    <div class="valid-feedback">You selected a position!</div>
                    <div class="invalid-feedback">
                      Please select a position!
                    </div>
                  </div>

                  <div class="col-md-12">
                    <label>Password</label>
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                    <div class="valid-feedback">Password field is valid!</div>
                    <div class="invalid-feedback">
                      Password field cannot be blank!
                    </div>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label class="form-check-label">
                      I confirm that all data are correct
                    </label>
                    <div class="invalid-feedback">
                      Please confirm that the entered data are all correct!
                    </div>
                  </div>

                  <div class="form-button mt-3">
                    <button id="submit" type="submit" class="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book1;
