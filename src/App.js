import React, { Component } from "react";
import "./App.scss";

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
  rotateIcon = () => {
    if (this.state.slide) {
      return "fa-rotate-270";
    } else {
      return "fa-rotate-90";
    }
  };
  changeColorOfIcon = () => {
    var x = this.state.slide ? "red" : "orange";
    return {
      color: x,
      transition: "all 0.5s ease-out",
      fontSize: "40px"
    };
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sideMenu" style={this.style()}>
            <div
              className="row justify-content-end"
              style={{
                height: "30px",
                width: "100%",
                marginTop: "20px"
              }}
            >
              <div className="icon">
                <i
                  class={"fas fa-chevron-circle-down " + this.rotateIcon()}
                  style={this.changeColorOfIcon()}
                  onClick={() => this.setState({ slide: !this.state.slide })}
                ></i>
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
