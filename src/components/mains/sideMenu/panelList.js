import React from "react";
import ButtonGrey from "../../reusable/buttonGrey";

function PanelList() {
  return (
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
  );
}

export default PanelList;
