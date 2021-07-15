import React from "react";
import useAboutPage from "../Hooks/useAboutPage";

import AboutPageBackground from "../Components/CustomBackgrounds/AboutPageBackground";
import BrandLogo from "../assets/brand-logo.png";
import Navbar from "../Components/Navbar/Navbar";

const AboutPage: React.FC = () => {
  const { navbarLinks } = useAboutPage();

  return (
    <div className="about-page">
      <AboutPageBackground />

      <a href="/" className="brand-logo _position-absolute">
        <img src={BrandLogo} alt="wiki olympus logo" />
      </a>

      <Navbar links={navbarLinks} />

      <div className="page-container">
        <div className="left-side">
          <h1 className="main-title">about us</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
