import React from "react";

interface Props {
  categoryData: {
    title: string;
  };
  categoryIcon?: string;
  subCategory?: boolean;
  disabled?: boolean;
  termToFilter?: string;
}

const Category: React.FC<Props> = ({
  categoryData,
  categoryIcon,
  subCategory = false,
  disabled = false,
  termToFilter = "",
}) => {
  return (
    <div className={`category${!subCategory ? "" : " sub-category"}`}>
      {categoryIcon ? (
        <div className="category-icon">
          <img src={categoryIcon} alt="category icon" />
        </div>
      ) : null}
      <button
        className={`category-title _custom-button${
          !disabled ? "" : " disabled"
        }`}
        onClick={() => console.log(categoryData.title)}
      >
        {!termToFilter
          ? categoryData.title
          : categoryData.title.replace(termToFilter, "")}
      </button>
    </div>
  );
};

export default Category;
