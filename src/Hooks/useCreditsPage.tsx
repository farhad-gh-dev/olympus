import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Reducers/index";

const useCreditsPage = () => {
  const { navbarLinks, creditsData } = useSelector(
    (store: RootState) => store.ThemeReducer
  );
  const [activeDropdown, setActiveDropdown] = useState("articles");
  const [activeImage, setActiveImage] = useState("articles");

  const dropdownToggleHandler = (targetCategory: string) => {
    if (activeDropdown === targetCategory) {
      setActiveDropdown("");
      return;
    }

    setActiveDropdown(targetCategory);
    setActiveImage(targetCategory);
  };

  return {
    navbarLinks,
    creditsData,
    activeDropdown,
    activeImage,
    dropdownToggleHandler,
  };
};

export default useCreditsPage;
