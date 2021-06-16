import React from "react";
import { useDispatch } from "react-redux";
import type { Categories, CategoryItem } from "./_CategoriesListTypes";

import Category from "./Category/Category";
import getIcon from "./getIcon";
import MythologyIcon from "../../assets/gods/icons/mythology.png";
import MythIcon from "../../assets/gods/icons/myth.png";
import { setActiveCategory } from "../../Redux/Actions/DataActions";

interface Props {
  categoriesData: Categories;
}

const CategoriesList: React.FC<Props> = ({ categoriesData }) => {
  const dispatch = useDispatch();

  const categoryClickHandler = (categoryName: CategoryItem) => {
    dispatch(setActiveCategory(categoryName));
  };

  return (
    <div className="categories-list">
      <div className="categories-column">
        {categoriesData.categories.map((category, index) => {
          if (!category.title.includes("mythology:")) {
            return (
              <Category
                key={category.title}
                categoryData={category}
                categoryIcon={getIcon(index)}
                clickHandler={categoryClickHandler}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="categories-column">
        <Category
          categoryData={{ title: "mythology", description: "" }}
          categoryIcon={MythologyIcon}
          disabled={true}
        />

        {categoriesData.categories.map((category) => {
          if (category.title.includes("mythology:")) {
            return (
              <Category
                key={category.title}
                categoryData={category}
                categoryIcon={MythIcon}
                subCategory={true}
                termToFilter={"mythology:"}
                clickHandler={categoryClickHandler}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
