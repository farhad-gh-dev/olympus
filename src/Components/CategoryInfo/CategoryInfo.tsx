import React from "react";
import { useDispatch } from "react-redux";
import BackIcon from "../../assets/back.svg";
import { clearActiveCategory } from "../../Redux/Actions/DataActions";

interface Props {
  categoryData: {
    title: string;
    description: string;
  };
  categoryImage: string;
}

const CategoryInfo: React.FC<Props> = ({ categoryData, categoryImage }) => {
  const dispatch = useDispatch();

  const backHandler = () => {
    dispatch(clearActiveCategory());
  };

  return (
    <div className="category-info">
      <div className="category-title">
        <button
          className="back-button _custom-button"
          onClick={() => backHandler()}
        >
          <img src={BackIcon} alt="back" />
        </button>
        <span>{categoryData.title?.replaceAll("mythology:", "")}</span>
      </div>
      <div className="category-image">
        <img src={categoryImage} alt="zeus" />
      </div>
      <div className="category-description">
        <p>
          {categoryData.description.split("\n").map((paragraph: any) => {
            return (
              <React.Fragment>
                {paragraph}
                <br />
              </React.Fragment>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default CategoryInfo;
