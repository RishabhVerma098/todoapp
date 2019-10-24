import React, { Component } from "react";
import "./App.scss";
import SideMenu from "./components/mains/sideMenu/index/sidemenu";
import Home from "./components/mains/home/index";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideMenu />
          <div className="col-10 main">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
