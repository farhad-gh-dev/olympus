import { fetchQuotes, fetchGodsList } from "../../Api/index";

export const SET_QUOTES = "SET_QUOTES";
export const SET_GODS_LIST = "SET_GODS_LIST";
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
  try {
    const data = await fetchQuotes();
    dispatch({
      type: SET_QUOTES,
      payload: data,
    });
  } catch {
    setError(dispatch);
  }
};

export const setGodsList = () => async (dispatch: any) => {
  try {
    const data = await fetchGodsList();

    dispatch({
      type: SET_GODS_LIST,
      payload: data,
    });
  } catch {
    setError(dispatch);
  }
};
