import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers/index";

const IndexBackground: React.FC = () => {
  const backgroundImages = useSelector(
    (store: RootState) => store.ThemeReducer.indexPageBackgroundImages
  );

  const [activeImage, setActiveImage] = useState<number>(-1);

  //to add transition effect to first render of the first backgroundImage
  useEffect(() => {
    setActiveImage(0);
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (activeImage === backgroundImages.length - 1) {
        setActiveImage(0);
        return;
      }

      setActiveImage(activeImage + 1);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [backgroundImages.length, activeImage]);

  return (
    <div className="index-background">
      {backgroundImages.map((bgImage, index) => {
        return (
          <img
            key={bgImage.alt}
            src={bgImage.src}
            alt={bgImage.alt}
            className={`front-layer${index === activeImage ? " active" : ""}`}
          />
        );
      })}
    </div>
  );
};

export default IndexBackground;
