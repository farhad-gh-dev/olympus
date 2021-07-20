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

      <div className="page-content">
        <div className="left-side">
          <h1 className="main-title">about us</h1>
          <div className="description-panel">
            <div className="description">
              <p>
                this website is a personal project with no commercial use or
                profit. attribution to the owners of assets used in this project
                is mentioned on credits page.
              </p>
              <br />
              <br />
              <p>
                all rights goes to creator of this project farhad gh, in case of
                any use of this project attribution is needed.
              </p>
            </div>
            <div className="top-left-frame">
              <div></div>
              <div></div>
            </div>
            <div className="bottom-right-frame">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
