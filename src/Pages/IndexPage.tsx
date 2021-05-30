import React from "react";

import IndexBackground from "../Components/IndexBackground/IndexBackground";
import BrandLogo from "../assets/brand-logo.png";
import Navbar from "../Components/Navbar/Navbar";
import Quotes from "../Components/Quotes/Quotes";

const IndexPage: React.FC = () => {
  return (
    <div className="index-page _position-relative">
      <IndexBackground />
      <a href="/" className="brand-logo _position-absolute">
        <img src={BrandLogo} alt="wiki olympus logo" />
      </a>
      <Navbar />
      <div className="text-area">
        <h1 className="main-title">gods of olympus</h1>
        <Quotes />
      </div>
    </div>
  );
};

export default IndexPage;
