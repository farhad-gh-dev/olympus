import React from "react";
import { useSelector } from "react-redux";
import useSlideTimer from "../../Hooks/useSlideTimer";
import { RootState } from "../../Redux/Reducers/index";
import "./custom-backgrounds.scss";

const IndexPageBackground: React.FC = () => {
  const backgroundImages = useSelector(
    (store: RootState) => store.ThemeReducer.indexPageBackgroundImages
  );

  const { activeTargetIndex: activeImageIndex } = useSlideTimer(
    backgroundImages.length,
    6000
  );

  return (
    <div className="custom-backgrounds index-page-background">
      <div className="front-layer">
        {backgroundImages.map((bgImage, index) => {
          return (
            <img
              key={bgImage.alt}
              src={bgImage.src}
              alt={bgImage.alt}
              className={`layer-image${
                index === activeImageIndex ? " active" : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IndexPageBackground;
