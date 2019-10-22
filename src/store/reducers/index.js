import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";
import panelListReducer from "./panelListReducer";

const allReducers = combineReducers({
  slider: sliderReducer,
  panelList: panelListReducer
});

export default allReducers;
