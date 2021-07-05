import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Reducers/index";

import CreditsPageBackground from "../Components/CustomBackgrounds/CredistPageBackground";
import PreviousPageButton from "../Components/PreviousPageButton/PreviousPageButton";
import Navbar from "../Components/Navbar/Navbar";

const CreditsPage: React.FC = () => {
  const { navbarLinks } = useSelector((store: RootState) => store.ThemeReducer);

  return (
    <div className="credits-page">
      <CreditsPageBackground />

      <PreviousPageButton />

      <Navbar links={navbarLinks} />
    </div>
  );
};

export default CreditsPage;
