import React, { useState } from "react";
import "./Header.css";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import SideBar from "../SideBar/SideBar";
import MenuIcon from "@mui/icons-material/Menu";
import logo1 from "../../Assets/Images/logo1.png";
const Pageheader = (props) => {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const handleNavBarMenu = () => {
    setToggleNavBar(true);
  };
  const handleMenuClose = (value) => {
    console.log(value);
    setToggleNavBar(value);
  };
  const handleIcons = () => {
    props.handleDisplaySection();
  };
  return (
    <>
      <nav className="header">
        <div className="header_left">
          <img src={logo1} alt="logo" className="logoNavBar" />
          <span className="logoSlogan">DRYM</span>
        </div>
        <div className="header_right">
          <div className="header_right_list">
            <HeaderOptions title="Home" iconHandler={props.scrollToHome} />
            <HeaderOptions
              title="Our Expertise"
              iconHandler={props.scrollToOurServices}
            />
            <HeaderOptions
              title="About Us"
              iconHandler={props.scrollToAboutUs}
            />
            <HeaderOptions title="Our Team" iconHandler={props.scrollToTeam} />
            <HeaderOptions
              title="Contact Us"
              iconHandler={props.scrollToContactUs}
            />
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
