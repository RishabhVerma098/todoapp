import React from "react";
import ResuableRoundedButton from "../../reusable/roundedResuableButton";
import { useSelector, useDispatch } from "react-redux";
import { sliderInOut } from "../../../store/actions/index";
import PanelList from "./panelList";
import PanelSettings from "./panelSettings";
import BottomUserLogOut from "./bottomUser&LogOut";
const style = slide => {
  var x = slide ? "-200px" : "0px";
  return {
    transform: "translateX(" + x + ")",
    transition: "all 0.5s ease-out"
  };
};

function Sidemenu() {
  const slide = useSelector(state => state.slider);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="col-2 sideMenu" style={style(slide)}>
        <div
          className="row top-row justify-content-end"
          style={{
            height: "30px",
            width: "100%",
            marginTop: "20px",
            marginLeft: "30px"
          }}
        >
          <div
            className="roundedbuttonback"
            onClick={() => dispatch(sliderInOut())}
          >
            <ResuableRoundedButton
              backgroundColor="#4A515C"
              fontSize="1.5rem"
              height="35px"
              width="35px"
              icon="fas fa-bars"
              paddingTop="6px"
            />
          </div>
        </div>
        <div className="row bottom-container">
          <PanelList />
          <PanelSettings />
        </div>
        <div className="row user">
          <BottomUserLogOut />
        </div>
      </div>
      <div className="col-10 main"></div>
    </React.Fragment>
  );
}

export default Sidemenu;
