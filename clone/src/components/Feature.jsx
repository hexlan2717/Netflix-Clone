import React from "react";

const Feature = ({ header, subHead, image, video }) => {
  return (
    <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">{header}</h3>
        <h5 className="feature__sub__title">{subHead}</h5>
      </div>
      <div className="feature__image__container">
        <img src={image} alt="Feature image" className="feature__image" />
        <div className="feature__backgroud__video__container">
          <video
            autoPlay=""
            loop=""
            muted=""
            className="feature__backgroud__video"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Feature;
