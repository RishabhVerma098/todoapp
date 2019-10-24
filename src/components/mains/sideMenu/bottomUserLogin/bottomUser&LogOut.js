import React from "react";
import "./bottomUser.scss";
function BottomUserLogOut() {
  return (
    <React.Fragment>
      <div className="col user-name-logout">
        <span className="logout">Log out</span>
      </div>
      <div className="col avatar">
        <img src={require("../../../../assets/person.png")} alt="img" />
      </div>
    </React.Fragment>
  );
}

export default BottomUserLogOut;
