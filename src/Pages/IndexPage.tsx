import React from "react";
import useIndexPage from "../Hooks/useIndexPage";

import Navbar from "../Components/Navbar/Navbar";
import IndexBackground from "../Components/CustomBackgrounds/IndexPageBackgrounds";
import BrandLogo from "../Components/BrandLogo/BrandLogo";
import Quotes from "../Components/Quotes/Quotes";
import ItemsSlider from "../Components/ItemsSlider/ItemsSlider";
import PageLoading from "../Components/Loadings/PageLoading";
import GeneralError from "../Components/Errors/GeneralError";
import "./index-page.scss";

const IndexPage: React.FC = () => {
  const { isLoading, error, navbarLinks, quotes, godsList } = useIndexPage();

  return (
    <div className="index-page _position-relative">
      <PageLoading show={isLoading} />
      {!isLoading ? (
        <React.Fragment>
          <IndexBackground />

          <GeneralError show={error} delay={900} />

          <BrandLogo />

          <Navbar links={navbarLinks} />

          <div className="text-area">
            <h1 className="main-title">gods of olympus</h1>
            <Quotes quotesArr={quotes} />
          </div>
          <div className="slider-section">
            <ItemsSlider sliderArr={godsList} />
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default IndexPage;
