import React from "react";
import "./SideBar.css";
import CloseEvent from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
const SideBar = (props) => {
  return (
    <div
      className="Sidebar"
      style={{
        transform: props.show ? "translateX(0)" : "translateX(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {/*     Backdrop
       */}
      <div className="top_sidebar">
        <IconButton onClick={props.modalClosed}>
          <Close />
        </IconButton>
      </div>
      {/*       NavigationItems
       */}{" "}
    </div>
  );
};
export default SideBar;

/*   
{/*    <div style={{display:"flex",alignItems:"center",marginLeft:"10px",margin:"20px 20px "}}>
      <MenuIcon/>
      <Avatar/> 
      </div>

<Backdrop show={props.show} clicked={props.modalClosed} />
 */
