import React, { useState } from "react";
import "./Header.css";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "../SideBar/SideBar";
const Pageheader = (props) => {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const handleNavBarMenu = () => {
    console.log(toggleNavBar);
    setToggleNavBar((prev) => (prev = !prev));
  };
  const handleSideBarMenu = () => {
    setToggleNavBar(false);
  };
  return (
    <>
      <nav className="header">
        <div className="header_left">
          <span>Logo</span>
        </div>
        <div className="header_right">
          <HeaderOptions Icon={InfoIcon} title="About" />
          <HeaderOptions Icon={InfoIcon} title="Our Services" />
          <HeaderOptions Icon={InfoIcon} title="Our Team" />
        </div>

        {!toggleNavBar ? (
          <HeaderOptions Icon={MenuIcon} iconHandler={handleNavBarMenu} />
        ) : (
          <div>
            <SideBar modalClosed={handleSideBarMenu} show={toggleNavBar} />
          </div>
        )}
        {/* <div className={!toggleNavBar ? "active_menu" : "inactive_menu"}>

         
        </div> */}
        {/*         <div
          className={
            toggleNavBar
              ? "header_right_menu_icon_active"
              : "header_right_menu_icon_inactive"
          }
        >
        </div> */}
      </nav>
    </>
  );
};

export default Pageheader;
