import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";

const allReducers = combineReducers({
  slider: sliderReducer
});

export default allReducers;
