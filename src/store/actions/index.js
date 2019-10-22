export const sliderInOut = () => {
  return {
    type: "SIDE-IN-OUT"
  };
};

export const panelList = userCreatedList => {
  return {
    type: "ADD-INTO-PANEL-LIST",
    payload: userCreatedList
  };
};
