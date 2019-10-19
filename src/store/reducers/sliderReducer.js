const sliderReducer = (state = false, action) => {
  switch (action.type) {
    case "SIDE-IN":
      state = true;
      return state;
    case "SLIDE-OUT":
      state = false;
      return state;
    default:
      return state;
  }
};
export default sliderReducer;
