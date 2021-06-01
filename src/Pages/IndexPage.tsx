import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { godsListHandler } from "../Redux/Actions/DataActions";
import type { RootState } from "../Redux/Reducers/index";

import IndexBackground from "../Components/IndexBackground/IndexBackground";
import BrandLogo from "../assets/brand-logo.png";
import Navbar from "../Components/Navbar/Navbar";
import Quotes from "../Components/Quotes/Quotes";
import ItemsSlider from "../Components/GodsSlider/ItemsSlider";

const IndexPage: React.FC = () => {
  const godsList = useSelector(
    (store: RootState) => store.DataReducer.godsList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(godsListHandler());
  }, []);

  return (
    <div className="index-page _position-relative">
      <IndexBackground />
      <a href="/" className="brand-logo _position-absolute">
        <img src={BrandLogo} alt="wiki olympus logo" />
      </a>
      <Navbar />
      <div className="text-area">
        <h1 className="main-title">gods of olympus</h1>
        <Quotes />
      </div>
      <ItemsSlider sliderData={godsList} />
    </div>
  );
};

export default IndexPage;
