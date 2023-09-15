import React from "react";
import "./SideBar.css";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import NavigationItems from "../NavigationItems/NavigationItems";
const SideBar = (props) => {
  const handleCloseSideBar = () => {
    props.modalClosed(false);
  };

  return (
    <div
      className="Sidebar"
      style={{
        transform: props.show ? "translateX(0)" : "translateX(100%)",
        transition: "transform 2s ease-in-out, opacity 0.5s ease-in-out",
        opacity: props.show ? "1" : "0",
        backgroundColor: "black",
      }}
    >
      <div className="top_sidebar">
        <IconButton
          style={{ border: "1px solid gray", color: "rgba(255,255,255,.5)" }}
          onClick={handleCloseSideBar}
        >
          <Close />
        </IconButton>
      </div>
      <NavigationItems />
    </div>
  );
};
export default SideBar;
