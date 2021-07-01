import React from "react";
import blog1 from "../../../images/main-blog4.png";
import blog2 from "../../../images/main-blog3.png";

function Blog() {
  return (
    <section>
      <div className="container my-5">
        <div className="text-center">
          <p>Trending Topic</p>
          <h2 className="display-5 fw-bold">Foodsto Blog Posts</h2>
        </div>
        <div className="row justify-contet-center align-items-center">
          <div className="col-lg-6 mb-lg-0 mb-5">
            <div className="card bg-light border-0">
              <img src={blog1} alt="" className="img-fluid"/>
              <div className="card-body">
                <h4 className="card-title fw-bold">
                  Healthy Vegetables salads To Try
                </h4>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-lg-0 mb-5">
            <div className="card bg-light border-0">
              <img src={blog2} alt=""  className="img-fluid"/>
              <div className="card-body">
                <h4 className="card-title fw-bold">
                  Baked Dishes That's Worth Trying
                </h4>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
