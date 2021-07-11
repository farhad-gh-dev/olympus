import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Reducers/index";

import CreditsPageBackground from "../Components/CustomBackgrounds/CredistPageBackground";
import PreviousPageButton from "../Components/PreviousPageButton/PreviousPageButton";
import Navbar from "../Components/Navbar/Navbar";
import CreditsDropDown from "../Components/CreditsDropDown/CreditsDropDown";

const CreditsPage: React.FC = () => {
  const { navbarLinks } = useSelector((store: RootState) => store.ThemeReducer);
  const [activeDropdown, setActiveDropdown] = useState("3d models");

  const dropdownTogglerHandler = (targetCategory: string) => {
    if (activeDropdown === targetCategory) {
      setActiveDropdown("");
      return;
    }

    setActiveDropdown(targetCategory);
  };

  const creditsData = [
    {
      categoryName: "3d models",
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
    {
      categoryName: "articles",
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
  ];

  return (
    <div className="credits-page">
      <CreditsPageBackground />

      <PreviousPageButton />

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
      </div>
    </div>
  );
};

export default CreditsPage;
