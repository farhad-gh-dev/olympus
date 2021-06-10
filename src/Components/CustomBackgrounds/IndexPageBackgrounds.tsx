import React from "react";
import { useSelector } from "react-redux";
import useSlideTimer from "../../Hooks/useSlideTimer";
import { RootState } from "../../Redux/Reducers/index";

const IndexPageBackground: React.FC = () => {
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

export default IndexPageBackground;
