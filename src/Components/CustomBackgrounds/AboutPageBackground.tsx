import React from "react";
import AboutImage from "../../assets/about-page.png";

const AboutPageBackground: React.FC = () => {
  return (
    <div className="custom-backgrounds index-page-background">
      <div className="about-image-container">
        <img src={AboutImage} alt="about" className="about-image" />
      </div>
    </div>
  );
};

export default AboutPageBackground;
