import React from "react";
import type { CategoryItem } from "../_CategoriesListTypes";

interface Props {
  categoryData: CategoryItem;
  categoryIcon?: string;
  subCategory?: boolean;
  disabled?: boolean;
  termToFilter?: string;
  clickHandler?: (categoryName: CategoryItem) => void;
}

const Category: React.FC<Props> = ({
  categoryData,
  categoryIcon,
  subCategory = false,
  disabled = false,
  termToFilter = "",
  clickHandler = () => console.log(`category clicked`),
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
        onClick={() => clickHandler(categoryData)}
      >
        {!termToFilter
          ? categoryData.title
          : categoryData.title.replaceAll(termToFilter, "")}
      </button>
    </div>
  );
};

export default Category;
