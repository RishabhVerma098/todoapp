import React, { Component } from "react";
import "./App.css";

//NOTE:DO NOT NAME CLASS AS CONATINER...

class App extends Component {
  state = {
    slide: false
  };

  style = slide => {
    var x = slide ? "-200px" : "0px";
    return {
      transform: "translateX(" + x + ")",
      transition: "transform 0.5s ease-out"
    };
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sideMenu" style={this.style(this.state.slide)}>
            <button
              onClick={() => this.setState({ slide: !this.state.slide })}
              style={{ marginLeft: "200px" }}
            >
              ok
            </button>
          </div>
          <div className="col-10 main"></div>
        </div>
      </div>
    );
  }
}

export default App;
