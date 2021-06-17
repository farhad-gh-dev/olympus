import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGodsList, setQuotes } from "../Redux/Actions/DataActions";
import type { RootState } from "../Redux/Reducers/index";

const useIndexPage = () => {
  const { navbarLinks } = useSelector((store: RootState) => store.ThemeReducer);
  const { error, quotes, godsList } = useSelector(
    (store: RootState) => store.DataReducer
  );

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await dispatch(setQuotes());
      await dispatch(setGodsList());
      setIsLoading(false);
    };

    getData();
  }, [dispatch]);

  return {
    isLoading,
    error,
    navbarLinks,
    quotes,
    godsList,
  };
};

export default useIndexPage;
