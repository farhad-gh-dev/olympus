import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/Reducers/index";
import { Link, useRouteMatch } from "react-router-dom";
import VideoBackground from "../Components/CustomBackgrounds/VideoBackground";

import PageLoading from "../Components/Loadings/PageLoading";
import CategoriesList from "../Components/CategoriesList/CategoriesList";
import { setGodInfo } from "../Redux/Actions/DataActions";

const GodTemplate: React.FC = () => {
  const godInfo = useSelector((store: RootState) => store.DataReducer.godInfo);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const [videoIsReady, setVideoIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onVideoLoadHandler = () => {
    setVideoIsReady(true);
  };

  useEffect(() => {
    if (videoIsReady) setIsLoading(false);
  }, [videoIsReady, godInfo]);

  useEffect(() => {
    dispatch(setGodInfo(match.url));
  }, [dispatch, match]);

  return (
    <div className="god-template _position-relative">
      <PageLoading show={isLoading} />
      {Object.keys(godInfo).length !== 0 ? (
        <React.Fragment>
          <VideoBackground
            targetVideo={godInfo.name}
            delay={550}
            onVideoLoadHandler={onVideoLoadHandler}
          />

          <div className="back-button-container">
            <Link to="/" className="prev-page-button _custom-button">
              <span>{"<"}</span>
            </Link>
          </div>

          <div className="text-section">
            <h3 className="title">{godInfo.name}</h3>
            <div className="categories-panel">
              <div className="categories-container">
                <CategoriesList categoriesData={godInfo} />
              </div>
              <div className="image-container">
                <img
                  className="category-image"
                  src={require("../assets/gods/zeus-birth.png").default}
                  alt="zeus"
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default GodTemplate;
