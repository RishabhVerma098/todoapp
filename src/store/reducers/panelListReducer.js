import { panelListData } from "../data/panelList";
const panelListReducer = (state = panelListData, action) => {
  switch (action.type) {
    case "ADD-INTO-PANEL-LIST":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default panelListReducer;
