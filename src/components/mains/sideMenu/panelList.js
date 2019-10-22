import React from "react";
import ButtonGrey from "../../reusable/buttonGrey";
import { useSelector, useDispatch } from "react-redux";
import { panelList } from "../../../store/actions/index";

function PanelList() {
  const statelist = useSelector(state => state.panelList);
  const dispatch = useDispatch();
  const list = statelist;
  return (
    <div className="panelList">
      <ul className="list">
        {list.map(i => (
          <li>{i}</li>
        ))}
      </ul>
      <span className="greyButton">
        <ButtonGrey
          backgroundColor="#4a515c"
          color="#8a8e91"
          font="NEW LIST +"
          dispatch={() => dispatch(panelList("heelo"))}
        />
      </span>
    </div>
  );
}

export default PanelList;
