import React from "react";
import logo from "../../../images/foodsto-logo-1.png";
import './Footer.css';

function Footer() {
  return (
    <section>
      <div className="container-fluid px-0 bg-banner">
        <div className="container mt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3">
              <div className="footer-about">
                
                <div className="text-center py-lg-5 text-md-start">
                <img src={logo} alt="" className="img-fluid" />
                  <p className="py-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-link">
                <div className="footer-menu">
                <h4 className="fw-bold">Link</h4>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Shopping Cart</a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-link">
                <div className="footer-menu">
                <h4 className="fw-bold">Information</h4>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-link">
                <div className="footer-menu">
                <h4 className="fw-bold">Quick Contact</h4>
                <ul>
                  <li>
                    <a href="#"> Patiya, Chittagong, Bangladesh</a>
                  </li>
                  <li>
                    <a href="#">foodtos@gmail.com</a>
                  </li>
                  <li>
                    <a href="#">+125325914</a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
