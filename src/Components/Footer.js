import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="w-100 py-4 flex-shrink-0">
      <div class="container py-4">
        <div class="row gy-4 gx-5">
          <div class="col-lg-4 col-md-6">
            <h5 class="h1 text-white">Travelling</h5>
            <p class="small text-muted mb-0">
              &copy; Copyrights. All rights reserved.{" "}
              <Link class="links text-primary" href="/">
                ©W3layouts
              </Link>
            </p>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class="text-white mb-3">About</h5>
            <ul class="list-unstyled text-muted">
              <li>
                <Link class="links" href="/">
                  FAQs
                </Link>
              </li>
              <li>
                <Link class="links" href="/">
                  About Us
                </Link>
              </li>
              <li>
                <Link class="links" href="/">
                  Services
                </Link>
              </li>
              <li>
                <Link class="links" href="/">
                  Travel Guides
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class="text-white mb-3">Explore</h5>
            <ul class="list-unstyled text-muted">
              <li>
                <Link class="links" href="/">
                  Support Center
                </Link>
              </li>
              <li>
                <Link class="links" href="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link class="links" href="/">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <h5 class="text-white mb-3">Subscribe</h5>
            <form action="/">
              <div class="input-group mb-3">
                <input
                  class="form-control"
                  type="text"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-primary"
                  id="button-addon2"
                  type="button"
                >
                  <i class="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <p class="small text-muted">
              Subscribe to our mailing list and get updates to your email inbox.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
