import { fetchQuotes, fetchGodsList, fetchGodInfo } from "../../Api/index";

export const SET_QUOTES = "SET_QUOTES";
export const SET_GODS_LIST = "SET_GODS_LIST";
export const SET_GOD_INFO = "SET_GOD_INFO";
export const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY";
export const CLEAR_ACTIVE_CATEGORY = "CLEAR_ACTIVE_CATEGORY";
export const SET_ERROR = "SET_ERROR";

const setError = (dispatch: any) => {
  dispatch({
    type: SET_ERROR,
    payload: true,
  });

  setTimeout(() => {
    dispatch({
      type: SET_ERROR,
      payload: false,
    });
  }, 4000);
};

export const setQuotes = () => async (dispatch: any) => {
  const [data, error] = await fetchQuotes();

  if (error) {
    setError(dispatch);
    return;
  }

  dispatch({
    type: SET_QUOTES,
    payload: data,
  });
};

export const setGodsList = () => async (dispatch: any) => {
  const [data, error] = await fetchGodsList();

  if (error) {
    setError(dispatch);
    return;
  }

  dispatch({
    type: SET_GODS_LIST,
    payload: data,
  });
};

export const setGodInfo = (godName: string) => async (dispatch: any) => {
  const [data, error] = await fetchGodInfo(godName);

  if (error) {
    setError(dispatch);
    return;
  }

  dispatch({
    type: SET_GOD_INFO,
    payload: data,
  });
};

export const setActiveCategory = (categoryData: any) => {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload: categoryData,
  };
};
