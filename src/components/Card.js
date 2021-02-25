import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

const Card = ({ images }) => {
  return (
    <SRLWrapper>
      <div className="row">
        {images.map((img, index) => (
          <div key={index} className="col-lg-4">
            <img src={img.url} alt="" className="photo rounded" />
          </div>
        ))}
      </div>
    </SRLWrapper>
  );
};

export default Card;
