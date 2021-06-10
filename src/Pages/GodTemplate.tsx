import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GodTemplateBackground } from "../Components/CustomBackgrounds/CustomBackgrounds";
import PageLoading from "../Components/Loadings/PageLoading";

const GodTemplate: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="god-template">
      <PageLoading show={isLoading} />
      <GodTemplateBackground
        targetVideo={"athena"}
        playVideo={!isLoading}
        delay={550}
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
