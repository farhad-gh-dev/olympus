import React from "react";
import useCreditsPage from "../Hooks/useCreditsPage";

import CreditsPageBackground from "../Components/CustomBackgrounds/CredistPageBackground";
import BrandLogo from "../assets/brand-logo.png";
import Navbar from "../Components/Navbar/Navbar";
import CreditsDropDown from "../Components/CreditsDropDown/CreditsDropDown";
import "./credits-page.scss";

const CreditsPage: React.FC = () => {
  const {
    navbarLinks,
    creditsData,
    activeDropdown,
    activeImage,
    dropdownToggleHandler,
  } = useCreditsPage();

  return (
    <div className="credits-page">
      <CreditsPageBackground />

      <a href="/" className="brand-logo _position-absolute">
        <img src={BrandLogo} alt="wiki olympus logo" />
      </a>

      <Navbar links={navbarLinks} />

      <div className="page-content">
        <div className="left-side">
          <h1 className="main-title">credits</h1>
          <div className="dropdowns-container">
            {creditsData.map((category) => {
              return (
                <CreditsDropDown
                  isActive={category.categoryName === activeDropdown}
                  dropdownTitle={category.categoryName}
                  dropdownItems={category.categoryItems}
                  toggleHandler={dropdownToggleHandler}
                />
              );
            })}
          </div>
        </div>
        <div className="right-side">
          <div className="dropdown-image-container">
            {creditsData.map((category) => {
              return (
                <img
                  src={category.categoryImage}
                  alt="category"
                  className={`${
                    category.categoryName === activeImage ? "show" : "hide"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsPage;
