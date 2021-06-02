import { fetchQuotes, fetchGodsList } from "../../Api/index";

export const SET_QUOTES = "SET_QUOTES";
export const SET_GODS_LIST = "SET_GODS_LIST";

export const setQuotes = () => async (dispatch: any) => {
  const data = await fetchQuotes();
  dispatch({
    type: SET_QUOTES,
    payload: data,
  });
};

export const setGodsList = () => async (dispatch: any) => {
  const data = await fetchGodsList();
  dispatch({
    type: SET_GODS_LIST,
    payload: data,
  });
};
