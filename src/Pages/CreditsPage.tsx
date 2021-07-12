import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Reducers/index";

import CreditsPageBackground from "../Components/CustomBackgrounds/CredistPageBackground";
import BrandLogo from "../assets/brand-logo.png";
import Navbar from "../Components/Navbar/Navbar";
import CreditsDropDown from "../Components/CreditsDropDown/CreditsDropDown";
import ModelsImage from "../assets/credits-page/3d-models.png";
import ImagesImage from "../assets/credits-page/images.png";
import ArticlesImage from "../assets/credits-page/articles.png";

const CreditsPage: React.FC = () => {
  const { navbarLinks } = useSelector((store: RootState) => store.ThemeReducer);
  const [activeDropdown, setActiveDropdown] = useState("articles");

  const dropdownTogglerHandler = (targetCategory: string) => {
    if (activeDropdown === targetCategory) return;

    setActiveDropdown(targetCategory);
  };

  const creditsData = [
    {
      categoryName: "articles",
      categoryImage: ArticlesImage,
      categoryItems: [
        {
          itemTitle: "zeus model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
        {
          itemTitle: "athena model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
        {
          itemTitle: "ares model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
      ],
    },
    {
      categoryName: "3d models",
      categoryImage: ModelsImage,
      categoryItems: [
        {
          itemTitle: "zeus model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
        {
          itemTitle: "athena model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
        {
          itemTitle: "ares model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
      ],
    },
    {
      categoryName: "images",
      categoryImage: ImagesImage,
      categoryItems: [
        {
          itemTitle: "zeus model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
        {
          itemTitle: "athena model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
        {
          itemTitle: "ares model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
        {
          itemTitle: "zeus model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
        {
          itemTitle: "athena model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
        {
          itemTitle: "ares model",
          itemLink: { linkTitle: "on sketchfab", linkUrl: "/sketchfab" },
        },
      ],
    },
  ];

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
                  toggleHandler={dropdownTogglerHandler}
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
                    category.categoryName === activeDropdown ? "show" : "hide"
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
