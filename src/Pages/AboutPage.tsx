import React from "react";
import useAboutPage from "../Hooks/useAboutPage";

import AboutPageBackground from "../Components/CustomBackgrounds/AboutPageBackground";
import BrandLogo from "../Components/BrandLogo/BrandLogo";
import Navbar from "../Components/Navbar/Navbar";
import GithubImage from "../assets/github.svg";
import "./about-page.scss";

const AboutPage: React.FC = () => {
  const { navbarLinks } = useAboutPage();

  return (
    <div className="about-page">
      <AboutPageBackground />

      <BrandLogo />

      <Navbar links={navbarLinks} />

      <div className="page-content">
        <div className="left-side">
          <h1 className="main-title">about us</h1>
          <div className="description-panel _position-relative">
            <div className="description">
              <p>
                this website is a personal project which i designed and
                developed. i have a passion for designing unique and interactive
                interfaces, and i looove mythology (specially greek mythology).
                so i spent sometime on thinking about the idea and voila, here's
                the result.
              </p>
              <br />
              <br />
              <p>
                attribution to the owners of assets used in this project is
                mentioned on credits page.In case of any use of this project
                attribution to my github is needed. also if you are willing to
                create content for this platform you are more than welcome to
                contact me and we will discuss the rest.
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
            <div className="social-media-container">
              <a
                href="https://github.com/farhad-gh-dev"
                target="_blank"
                rel="noreferrer"
                className="social-media-link"
              >
                <img src={GithubImage} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
