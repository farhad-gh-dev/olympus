import React from "react";

interface Props {
  show: boolean;
}

const PageLoading: React.FC<Props> = ({ show }) => {
  return (
    <div className={`page-loading${show ? "" : " hide"}`}>
      <div className="image-container">
        <img src="./medusa.png" alt="medusa" />
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
