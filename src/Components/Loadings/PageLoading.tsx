import React, { useState } from "react";
import MedusaImage from "../../assets/medusa.png";
import "./page-loading.scss";

interface Props {
  show: boolean;
}

const PageLoading: React.FC<Props> = ({ show }) => {
  const [imageIsLoading, setImageIsLoading] = useState<boolean>(true);

  const onImageLoad = () => {
    setImageIsLoading(false);
  };

  return (
    <div
      className={`page-loading${!show ? " hide" : ""}${
        imageIsLoading ? " hide-loading-bar" : ""
      }`}
    >
      <div className="image-container">
        <img src={MedusaImage} alt="medusa" onLoad={() => onImageLoad()} />
        <div className="left-eye"></div>
        <div className="right-eye"></div>
      </div>
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
    </div>
  );
};

export default PageLoading;
