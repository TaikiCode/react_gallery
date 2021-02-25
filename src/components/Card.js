import React from "react";

const Card = ({ images }) => {
  return (
    <div className="row">
      {images.map((img, index) => (
        <div key={index} className="col-lg-4 photo">
          <img src={img.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Card;
