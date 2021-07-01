import React from "react";
import NuturalCard from "./NuturalCard/NuturalCard";
import Heinz from "../../../images/25-1.jpg";
import dish from "../../../images/snack-1-01.jpg";
import bread from "../../../images/breakfast-1-01-1.jpg";
import bolthouse from "../../../images/16-1.jpg";
import nestke from "../../../images/02-2.jpg";
import grapes from "../../../images/02-5.jpg";
import InfoCard from "./InfoCard/InfoCard";

function NuturalProduct() {
  const productData = [
    {
      name: "Heinz ketchup",
      price: 10,
      discountPrice: "",
      img: Heinz,
    },
    {
      name: "Side Dish",
      price: 10,
      discountPrice: 8,
      img: dish,
    },
    {
      name: "Bread Breakfast",
      price: 10,
      discountPrice: 8,
      img: bread,
    },
    {
      name: "Bolthouse",
      price: 10,
      discountPrice: 8,
      img: bolthouse,
    },
    {
      name: "Grapes",
      price: 10,
      discountPrice: 8,
      img: grapes,
    },
    {
      name: "Nestle Fitness",
      price: 300,
      discountPrice: 8,
      img: nestke,
    },
  ];
  return (
    <section id="nuturea">
      <div className="container-fluid py-5" style={{ height: "100vh" }}>
        <div className="text-center">
          <p className="lead text-muted">No Chemicals No Pesticides</p>
          <h2 className="display-5 fw-bold">Fresh Organic Products</h2>
        </div>
        <div className="row py-5 justify-content-center align-items-center">
          <div className="col-lg-4">
            <NuturalCard />
          </div>
          <div className="col-lg-8">
            <div className="container">
            <div className="row">
              {productData.map((product) => (
                <InfoCard product={product} key={product.name} />
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NuturalProduct;
