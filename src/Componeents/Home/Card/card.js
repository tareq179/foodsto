import React from "react";
import CardDettels from "./CardDettels/CardDettels";

function card() {
  const cardData = [
    {
      subTitle: "Organically produce",
      title: "Vegetable",
      background: "bg1",
    },
    {
      subTitle: "flat 30 off",
      title: "Fresh Foods",
      background: "bg2",
    },
    {
      subTitle: "Cluterfree",
      title: "Super Salads",
      background: "bg3",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {cardData.map((cardData) => (
            <CardDettels cardData={cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default card;
