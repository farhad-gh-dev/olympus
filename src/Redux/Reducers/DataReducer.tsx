import { SET_GODS_LIST } from "../Actions/DataActions";

const InitialState = {
  godsList: [],
};

const DataReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case SET_GODS_LIST:
      return {
        ...state,
        godsList: action.payload,
      };
  }
  return state;
};

export { DataReducer };
