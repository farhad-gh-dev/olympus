import { fetchGodsList } from "../../Api/index";

export const SET_GODS_LIST = "SET_GODS_LIST";

export const godsListHandler = () => async (dispatch: any) => {
  const data = await fetchGodsList();
  dispatch({
    type: SET_GODS_LIST,
    payload: data,
  });
};
