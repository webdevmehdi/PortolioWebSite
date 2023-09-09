import React, { useState } from "react";
import "./Header.css";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
const Pageheader = (props) => {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const handleNavBarMenu = () => {
    setToggleNavBar(true);
  };
  return (
    <>
      <nav className="header">
        <div className="header_left">
          <span>Logo</span>
        </div>
        <div className="header_right">
          <div className="header_right_list">
            <HeaderOptions Icon={InfoIcon} title="About" />
            <HeaderOptions Icon={InfoIcon} title="Our Services" />
            <HeaderOptions Icon={InfoIcon} title="Our Team" />
          </div>
        </div>
        <div className="header_right_menu_icon">
          <HeaderOptions Icon={MenuIcon} />
        </div>

        {/*  <button onClick={handleNavBarMenu}>BurgerMenu</button> */}
      </nav>
    </>
  );
};

export default Pageheader;
