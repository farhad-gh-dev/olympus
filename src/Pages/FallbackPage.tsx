import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Reducers/index";

import FallbackPageBackground from "../Components/CustomBackgrounds/FallbackPageBackground";
import BrandLogo from "../Components/BrandLogo/BrandLogo";
import Navbar from "../Components/Navbar/Navbar";
import AthenaImage from "../assets/404.png";
import "./fallback-page.scss";

const FallbackPage: React.FC = () => {
  const { navbarLinks } = useSelector((store: RootState) => store.ThemeReducer);

  return (
    <div className="fallback-page _position-absolute">
      <Navbar links={navbarLinks} />
      <FallbackPageBackground />

      <BrandLogo />

      <div className="page-content">
        <div className="first-section">
          <div className="image-container">
            <img src={AthenaImage} alt="page was not found" />
          </div>
        </div>
        <div className="second-section">
          <div className="text-container">
            <p className="redirect-description">
              what are you looking for?
              <br />
              page was not found
            </p>
            <div className="redirect-button">
              <a href="/">go back</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FallbackPage;
