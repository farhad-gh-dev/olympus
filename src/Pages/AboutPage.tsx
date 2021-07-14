import React from "react";
import useAboutPage from "../Hooks/useAboutPage";

import CreditsPageBackground from "../Components/CustomBackgrounds/CredistPageBackground";
import BrandLogo from "../assets/brand-logo.png";
import Navbar from "../Components/Navbar/Navbar";

const AboutPage: React.FC = () => {
  const { navbarLinks } = useAboutPage();

  return (
    <div className="about-page">
      <CreditsPageBackground />

      <a href="/" className="brand-logo _position-absolute">
        <img src={BrandLogo} alt="wiki olympus logo" />
      </a>

      <Navbar links={navbarLinks} />
    </div>
  );
};

export default AboutPage;
