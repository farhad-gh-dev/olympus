import React from "react";
import { useSelector } from "react-redux";
import useSlideTimer from "../../Hooks/useSlideTimer";
import { RootState } from "../../Redux/Reducers/index";

const IndexBackground: React.FC = () => {
  const backgroundImages = useSelector(
    (store: RootState) => store.ThemeReducer.indexPageBackgroundImages
  );

  const { activeTargetIndex: activeImageIndex } = useSlideTimer(
    backgroundImages.length,
    6000
  );

  return (
    <div className="index-background">
      {backgroundImages.map((bgImage, index) => {
        return (
          <img
            key={bgImage.alt}
            src={bgImage.src}
            alt={bgImage.alt}
            className={`front-layer${
              index === activeImageIndex ? " active" : ""
            }`}
          />
        );
      })}
    </div>
  );
};

export default IndexBackground;
