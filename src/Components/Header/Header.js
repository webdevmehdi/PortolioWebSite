import React, { useState } from "react";
import "./Header.css";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import SideBar from "../SideBar/SideBar";
import MenuIcon from "@mui/icons-material/Menu";
const Pageheader = (props) => {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const handleNavBarMenu = () => {
    setToggleNavBar(true);
  };
  const handleMenuClose = (value) => {
    console.log(value);
    setToggleNavBar(value);
  };
  return (
    <>
      <nav className="header">
        <div className="header_left">
          <span>Logo</span>
        </div>
        <div className="header_right">
          <div className="header_right_list">
            <HeaderOptions title="About" />
            <HeaderOptions title="Our Services" />
            <HeaderOptions title="Our Team" />
          </div>
        </div>
        <div className="header_right_menu_icon">
          <HeaderOptions Icon={MenuIcon} iconHandler={handleNavBarMenu} />
        </div>

        <SideBar show={toggleNavBar} modalClosed={handleMenuClose} />
      </nav>
    </>
  );
};

export default Pageheader;
