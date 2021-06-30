import React from 'react';
import './Navbar.css';
import logo from '../../../images/foodsto-logo-1.png';

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navigation-wrap">
        <div className="container">
        {/* navbar brand / title */}
            <a className="navbar-brand" href="#intro">
            <img src={logo} alt=""  height="40"/>
            </a>
            {/* toggle button for mobile nav */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* navbar links */}
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
          <li className="nav-item">
            <a className="nav-link" href="#topics">About The Book</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#reviews">Reviews</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Get in Touch</a>
          </li>
          <li className="nav-item d-md-none">
            <a className="nav-link" href="#pricing">Pricing</a>
          </li>
          <li className="nav-item ms-2 d-none d-md-inline">
            <a className="btn btn-main" href="#pricing">buy now</a>
          </li>
          
        </ul>
      </div>
        </div>        
    </nav>
    )
}

export default Navbar
