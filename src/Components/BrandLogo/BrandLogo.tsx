import React from "react";
import BrandImage from "../../assets/brand-logo.png";
import "./brand-logo.scss";

const BrandLogo: React.FC = () => {
  return (
    <a href="/" className="brand-logo _position-absolute">
      <img src={BrandImage} alt="wiki olympus logo" />
    </a>
  );
};

export default BrandLogo;
