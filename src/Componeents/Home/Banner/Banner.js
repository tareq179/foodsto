import React from "react";
import Man from "../../../images/man.png";

function Banner() {
  return (
    <section id="intro">
      <div className="container-fluid px-0 bg-banner">
        <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 py-lg-5 text-center text-md-start">
            <h1>
              <div className="display-1 fw-bold">
                Fresh <div className="d-inline" style={{color:'#4edd89'}}>Grocery</div> <br /> Shopping
              </div>
            </h1>
            <p className="lead my-4 text-muted">
              It is a long established fact that a reader will be the readerable
              content of a page
            </p>
            <a href="#product" className="btn btn-main btn-lg">VIEW MORE</a>
          </div>
          <div className="col-lg-5 py-lg-5  text-center">
              <img src={Man} alt="bannarMan" className="img-fluid" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
