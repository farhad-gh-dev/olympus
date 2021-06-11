import { SET_QUOTES, SET_GODS_LIST, SET_ERROR } from "../Actions/DataActions";

const InitialState = {
  error: false,
  quotes: [],
  godsList: [],
  godInfo: {
    name: "zeus",
    categories: [
      {
        title: "origin",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit iusto molestiae deleniti atque neque dolor est ut cupiditate ipsam? Corporis inventore minus quidem molestias fuga provident magnam expedita voluptatibus autem.",
      },
    ],
  },
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
