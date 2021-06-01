import { combineReducers } from "redux";
import { ThemeReducer } from "./ThemeReducer";
import { DataReducer } from "./DataReducer";

const rootReducer = combineReducers({
  ThemeReducer,
  DataReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
