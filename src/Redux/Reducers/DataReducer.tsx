import { SET_QUOTES, SET_GODS_LIST } from "../Actions/DataActions";

const InitialState = {
  quotes: [],
  godsList: [],
};

const DataReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case SET_GODS_LIST:
      return {
        ...state,
        godsList: action.payload,
      };
    case SET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
      };
    default:
      return state;
  }
};

export { DataReducer };
