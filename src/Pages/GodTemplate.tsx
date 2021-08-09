import React from "react";
import { Redirect } from "react-router-dom";
import useGodTemplate from "../Hooks/useGodTemplate";

import PageLoading from "../Components/Loadings/PageLoading";
import VideoBackground from "../Components/CustomBackgrounds/VideoBackground";
import PreviousPageButton from "../Components/PreviousPageButton/PreviousPageButton";
import Navbar from "../Components/Navbar/Navbar";
import CategoriesList from "../Components/CategoriesList/CategoriesList";
import CategoryInfo from "../Components/CategoryInfo/CategoryInfo";
import "./god-template.scss";

const GodTemplate: React.FC = () => {
  const {
    isLoading,
    error,
    navbarLinks,
    godInfo,
    activeCategory,
    clearActiveCategory,
    onVideoLoadHandler,
    ImageSrcHandler,
  } = useGodTemplate();

  if (error) return <Redirect to="/404" />;
  return (
    <div className="god-template _position-relative">
      <PageLoading show={isLoading} />
      {Object.keys(godInfo).length !== 0 ? (
        <React.Fragment>
          <VideoBackground
            targetVideo={godInfo.name}
            delay={550}
            onVideoLoadHandler={onVideoLoadHandler}
          />

          <PreviousPageButton />

          <Navbar links={navbarLinks} />

          <div className="text-section">
            <h3 className="title">{godInfo.name}</h3>
            <div className="categories-panel _position-relative">
              <div
                className={`categories-container${
                  !activeCategory ? " _show" : " _hide"
                }`}
              >
                <CategoriesList categoriesData={godInfo} />
              </div>

              <div
                className={`selected-category-container${
                  activeCategory ? " _show" : " _hide"
                }`}
              >
                {activeCategory ? (
                  <CategoryInfo
                    categoryData={activeCategory}
                    categoryImage={ImageSrcHandler()}
                    backHandler={() => clearActiveCategory()}
                  />
                ) : null}
              </div>

              <div className="image-container">
                <img
                  className="category-image"
                  src={ImageSrcHandler()}
                  alt="zeus"
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default GodTemplate;
