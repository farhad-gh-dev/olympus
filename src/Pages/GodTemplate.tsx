import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoBackground from "../Components/CustomBackgrounds/VideoBackground";

import PageLoading from "../Components/Loadings/PageLoading";

const GodTemplate: React.FC = () => {
  const [videoIsLoaded, setVideoIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const videoLoadHandler = () => {
    setVideoIsLoaded(true);
  };

  useEffect(() => {
    if (videoIsLoaded) setIsLoading(false);
  }, [videoIsLoaded]);

  return (
    <div className="god-template">
      <PageLoading show={isLoading} />
      <VideoBackground
        targetVideo={"zeus"}
        delay={550}
        videoLoadHandler={videoLoadHandler}
      />
      <div className="back-button-container">
        <Link to="/" className="prev-page-button _custom-button">
          <span>{"<"}</span>
        </Link>
      </div>
    </div>
  );
};

export default GodTemplate;
