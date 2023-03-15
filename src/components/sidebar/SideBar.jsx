import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SideBar.css";

function SideBar() {
  return <div>
    <FontAwesomeIcon icon={faPerson}/>
  </div>;
}

export default SideBar;
