const sliderReducer = (state = false, action) => {
  switch (action.type) {
    case "SIDE-IN-OUT":
      state = !state;
      return state;
    default:
      return state;
  }
};
export default sliderReducer;
