import { useSelector } from "react-redux";
import { RootState } from "../Redux/Reducers/index";

const useAboutPage = () => {
  const { navbarLinks } = useSelector((store: RootState) => store.ThemeReducer);

  return {
    navbarLinks,
  };
};

export default useAboutPage;
