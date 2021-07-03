import React from "react";
import BackIcon from "../../assets/back.svg";

interface Props {
  categoryData: {
    title: string;
    description: string;
  };
  categoryImage: string;
  backHandler: () => void;
}

const CategoryInfo: React.FC<Props> = ({
  categoryData = { title: "", description: "" },
  categoryImage = "",
  backHandler = () => {},
}) => {
  return (
    <div className="category-info">
      <div className="category-title">
        <button
          className="back-button _custom-button"
          onClick={() => backHandler()}
          data-testid="back-button"
        >
          <img src={BackIcon} alt="back" />
        </button>
        <span>{categoryData.title.replace("mythology:", "")}</span>
      </div>
      <div className="category-image">
        <img src={categoryImage} alt="category image" />
      </div>
      <div className="category-description">
        <p>
          {categoryData.description.split("\n").map((paragraph: any) => {
            return (
              <React.Fragment key={paragraph}>
                {paragraph}
                <br data-testid="paragraph-break" />
              </React.Fragment>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default CategoryInfo;
