import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Img.scss";

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt="cinewave"
      effect="blur"
      src={src}
    />
  );
};

export default Img;
