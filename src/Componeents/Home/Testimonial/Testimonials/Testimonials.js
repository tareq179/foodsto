import React from "react";

function Testimonials({ testimonial }) {
  const { name, img, disc, desicnation } = testimonial;
  return (
    <div className="col-lg-4">
      <div className="item">
        <div class="caption text-center">
          <p>{disc}</p>
          <img src={img} alt="" />
          <h5>{name}</h5>
          <p>{desicnation}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
