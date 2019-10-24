import React, { Component } from "react";
import "./App.scss";
import SideMenu from "./components/mains/sideMenu/index/sidemenu";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideMenu />
        </div>
      </div>
    );
  }
}

export default App;
