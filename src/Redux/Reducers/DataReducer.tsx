import {
  SET_QUOTES,
  SET_GODS_LIST,
  SET_GOD_INFO,
  SET_ERROR,
} from "../Actions/DataActions";

const InitialState = {
  error: false,
  quotes: [],
  godsList: [],
  godInfo: {},
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

    case SET_GOD_INFO:
      return {
        ...state,
        godInfo: action.payload[0],
      };
    case SET_ERROR:
      return {
        ...state,
        error: state.error !== action.payload ? action.payload : state.error,
      };

    default:
      return state;
  }
};

export { DataReducer };
