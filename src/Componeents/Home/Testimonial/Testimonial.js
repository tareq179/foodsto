import React from "react";
import "./Testimonial.css";
import shirley from "../../../images/10.png";
import brim from "../../../images/5.png";
import john from "../../../images/7.png";
import Testimonials from "./Testimonials/Testimonials";

function Testimonial() {
  const info = [
    {
      img: john,
      name: "John Deo",
      desicnation: "Web Developer",
      disc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
      img: shirley,
      name: "Shirley Edwards",
      desicnation: "manager",
      disc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
      img: brim,
      name: "Brim Jesse",
      desicnation: "CEO",
      disc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
  ];
  return (
    <section id="review">
      <div className="wrapper review my-5">
        <div className="container py-5 text-center">
          <div className="text-center text-white">
            <p className="lead">Testimonial</p>
            <h2>
              <div className="display-5 fw-bold">What Our Costomers Say</div>
            </h2>
          </div>
          <div className="row">
            {info.map((testimonial) => (
              <Testimonials testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
