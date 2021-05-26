import React, { useEffect, useState } from "react";

import HermesImage from "../../assets/index-page/hermes.png";
import PoseidonImage from "../../assets/index-page/poseidon.png";
import AresImage from "../../assets/index-page/ares.png";

const IndexBackground: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number>(-1);

  const backgroundImages = [
    { src: HermesImage, alt: "hermes background" },
    { src: PoseidonImage, alt: "poseidon background" },
    { src: AresImage, alt: "ares background" },
  ];

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
    <div className="index-background _cover-parent">
      {backgroundImages.map((bgImage, index) => {
        return (
          <img
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
