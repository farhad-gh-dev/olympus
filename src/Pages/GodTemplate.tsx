import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Reducers/index";
import { Link } from "react-router-dom";
import VideoBackground from "../Components/CustomBackgrounds/VideoBackground";

import PageLoading from "../Components/Loadings/PageLoading";

const GodTemplate: React.FC = () => {
  const godInfo = useSelector((store: RootState) => store.DataReducer.godInfo);

  const [videoIsReady, setVideoIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onVideoLoadHandler = () => {
    setVideoIsReady(true);
  };

  useEffect(() => {
    if (videoIsReady) setIsLoading(false);
  }, [videoIsReady, godInfo]);

  return (
    <div className="god-template">
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
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default GodTemplate;
