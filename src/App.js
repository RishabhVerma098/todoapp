import React, { Component } from "react";
import "./App.scss";
import ResuableRoundedButton from "./components/reusable/roundedResuableButton";
import ButtonGrey from "./components/reusable/buttonGrey";

class App extends Component {
  state = {
    slide: false
  };

  style = () => {
    var x = this.state.slide ? "-200px" : "0px";
    return {
      transform: "translateX(" + x + ")",
      transition: "all 0.5s ease-out"
    };
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sideMenu" style={this.style()}>
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
                onClick={() => this.setState({ slide: !this.state.slide })}
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
              <div className="panelList">
                <ul className="list">
                  <li>All tasks</li>
                  <li>Personal</li>
                  <li>Work</li>
                </ul>
                <span className="greyButton">
                  <ButtonGrey
                    backgroundColor="#4a515c"
                    color="#8a8e91"
                    font="NEW LIST +"
                  />
                </span>
              </div>
              <div className="panelSettings">
                <ul className="list">
                  <li>Settings</li>
                  <li>Archive</li>
                  <li>Support</li>
                  <li>About</li>
                </ul>
              </div>
            </div>
            <div className="row user">
              <div className="col user-name-logout">
                <span className="logout">Log out</span>
              </div>
              <div className="col avatar">
                <img src={require("./assets/person.png")} alt="img" />
              </div>
            </div>
          </div>
          <div className="col-10 main"></div>
        </div>
      </div>
    );
  }
}

export default App;
