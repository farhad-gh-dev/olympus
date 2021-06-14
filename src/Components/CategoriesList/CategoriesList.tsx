import React from "react";
import type { Categories } from "./_CategoriesListTypes";

import Category from "./Category/Category";
import getIcon from "./getIcon";
import MythologyIcon from "../../assets/gods/icons/mythology.png";
import MythIcon from "../../assets/gods/icons/myth.png";

interface Props {
  categoriesData: Categories;
}

const CategoriesList: React.FC<Props> = ({ categoriesData }) => {
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
              />
            );
          }
          return null;
        })}
      </div>
      <div className="categories-column">
        <Category
          categoryData={{ title: "mythology" }}
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
