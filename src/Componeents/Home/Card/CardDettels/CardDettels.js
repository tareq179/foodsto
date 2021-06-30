import React from "react";
import "./CardDettels.css";

function CardDettels({ cardData }) {
  return (
    <div className="col-lg-4">
    <div className="justify-content-center align-items-center py-5">
    <div className={`card-fluid p-4 card-${cardData.background}`}  style={{width: '25rem', height:'15rem'}}>
      <div className="card-body text-start py-4">
        <h5 className="lead card-subtitle">{cardData.subTitle}</h5>
        <h4 className="card-title fw-bold">{cardData.title}</h4>
        <a href="/#" className="mt-4 btn btn-main">
          Shop Now
        </a>
      </div>
    </div>
    </div>
</div>
  );
}

export default CardDettels;