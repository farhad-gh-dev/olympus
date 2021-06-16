import React from "react";
import useGodTemplate from "../Hooks/useGodTemplate";

import PageLoading from "../Components/Loadings/PageLoading";
import VideoBackground from "../Components/CustomBackgrounds/VideoBackground";
import CategoriesList from "../Components/CategoriesList/CategoriesList";
import CategoryInfo from "../Components/CategoryInfo/CategoryInfo";

const GodTemplate: React.FC = () => {
  const {
    isLoading,
    // error,
    godInfo,
    activeCategory,
    onVideoLoadHandler,
    ImageSrcHandler,
  } = useGodTemplate();

  // if(error) <Redirect />
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

          <div className="back-button-container">
            <a href="/" className="prev-page-button _custom-button">
              <span>{"<"}</span>
            </a>
          </div>

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
