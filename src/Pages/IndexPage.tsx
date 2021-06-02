import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGodsList, setQuotes } from "../Redux/Actions/DataActions";
import type { RootState } from "../Redux/Reducers/index";

import IndexBackground from "../Components/IndexBackground/IndexBackground";
import BrandLogo from "../assets/brand-logo.png";
import Navbar from "../Components/Navbar/Navbar";
import Quotes from "../Components/Quotes/Quotes";
import ItemsSlider from "../Components/GodsSlider/ItemsSlider";

const IndexPage: React.FC = () => {
  const { navbarLinks } = useSelector((store: RootState) => store.ThemeReducer);
  const { godsList, quotes } = useSelector(
    (store: RootState) => store.DataReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuotes());
    dispatch(setGodsList());
  }, [dispatch]);

  return (
    <div className="index-page _position-relative">
      <IndexBackground />
      <a href="/" className="brand-logo _position-absolute">
        <img src={BrandLogo} alt="wiki olympus logo" />
      </a>
      <Navbar links={navbarLinks} />
      <div className="text-area">
        <h1 className="main-title">gods of olympus</h1>
        <Quotes quotesArr={quotes} />
      </div>
      <ItemsSlider sliderArr={godsList} />
    </div>
  );
};

export default IndexPage;
