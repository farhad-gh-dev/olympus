import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Reducers/index";

import CreditsPageBackground from "../Components/CustomBackgrounds/CredistPageBackground";
import PreviousPageButton from "../Components/PreviousPageButton/PreviousPageButton";
import Navbar from "../Components/Navbar/Navbar";
import CreditsDropDown from "../Components/CreditsDropDown/CreditsDropDown";

const CreditsPage: React.FC = () => {
  const { navbarLinks } = useSelector((store: RootState) => store.ThemeReducer);

  return (
    <div className="credits-page">
      <CreditsPageBackground />

      <PreviousPageButton />

      <Navbar links={navbarLinks} />

      <div className="page-content">
        <div className="left-side">
          <h1 className="main-title">credits</h1>
          <CreditsDropDown />
          <CreditsDropDown />
        </div>
      </div>
    </div>
  );
};

export default CreditsPage;
