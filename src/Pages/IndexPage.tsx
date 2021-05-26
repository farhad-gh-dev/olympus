import React from "react";

import IndexBackground from "../Components/IndexBackground/IndexBackground";
import BrandLogo from "../assets/brand-logo.png";

const IndexPage: React.FC = () => {
  return (
    <div className="index-page _position-relative">
      <IndexBackground />
      <a href="/" className="brand-logo _position-absolute">
        <img src={BrandLogo} alt="wiki olympus logo" />
      </a>
    </div>
  );
};

export default IndexPage;
