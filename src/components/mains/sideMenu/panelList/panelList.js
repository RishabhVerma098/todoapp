import React from "react";
import { useSelector } from "react-redux";
import "./panelList.scss";
import ModalTry from "../../sideMenu/modal/modalTry";

function PanelList() {
  const statelist = useSelector(state => state.panelList);
  const list = statelist;
  return (
    <div className="panelList">
      <ul className="list">
        {list.map(i => (
          <li>{i}</li>
        ))}
      </ul>
      <span className="greyButton">
        <ModalTry />
      </span>
    </div>
  );
}

export default PanelList;
