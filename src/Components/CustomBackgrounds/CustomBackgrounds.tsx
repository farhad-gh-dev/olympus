import React from "react";
import { useSelector } from "react-redux";
import useSlideTimer from "../../Hooks/useSlideTimer";
import { RootState } from "../../Redux/Reducers/index";

export const IndexBackground: React.FC = () => {
  const backgroundImages = useSelector(
    (store: RootState) => store.ThemeReducer.indexPageBackgroundImages
  );

  const { activeTargetIndex: activeImageIndex } = useSlideTimer(
    backgroundImages.length,
    6000
  );

  return (
    <div className="custom-backgrounds index-background">
      {backgroundImages.map((bgImage, index) => {
        return (
          <img
            key={bgImage.alt}
            src={bgImage.src}
            alt={bgImage.alt}
            className={`front-image${
              index === activeImageIndex ? " active" : ""
            }`}
          />
        );
      })}
    </div>
  );
};

export const GodTemplateBackground: React.FC = () => {
  return (
    <div className="custom-backgrounds">
      <video
        src={require("../../assets/gods/zeus.mp4").default}
        autoPlay={true}
        className="front-video"
      />
    </div>
  );
};
