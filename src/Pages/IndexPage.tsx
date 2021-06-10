import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGodsList, setQuotes } from "../Redux/Actions/DataActions";
import type { RootState } from "../Redux/Reducers/index";

import IndexBackground from "../Components/CustomBackgrounds/IndexPageBackgrounds";
import BrandLogo from "../assets/brand-logo.png";
import Quotes from "../Components/Quotes/Quotes";
import ItemsSlider from "../Components/GodsSlider/ItemsSlider";
import PageLoading from "../Components/Loadings/PageLoading";
import GeneralError from "../Components/Errors/GeneralError";

const IndexPage: React.FC = () => {
  const { error, godsList, quotes } = useSelector(
    (store: RootState) => store.DataReducer
  );

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await dispatch(setQuotes());
      await dispatch(setGodsList());
      setIsLoading(false);
    };

    getData();
  }, [dispatch]);

  return (
    <div className="index-page _position-relative">
      <PageLoading show={isLoading} />
      <GeneralError show={error} delay={900} />
      <IndexBackground />
      <a href="/" className="brand-logo _position-absolute">
        <img src={BrandLogo} alt="wiki olympus logo" />
      </a>

      <div className="text-area">
        <h1 className="main-title">gods of olympus</h1>
        <Quotes quotesArr={quotes} />
      </div>
      <div className="slider-section">
        <ItemsSlider sliderArr={godsList} />
      </div>
    </div>
  );
};

export default IndexPage;
