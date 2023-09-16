import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationsItems.css";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SchoolIcon from "@material-ui/icons/School";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { NavLink } from "react-router-dom";
const NavigationItems = () => {
  const [menu, setMenu] = useState(true);

  return (
    <div className="NavigationItems">
      <ul className="NavigationMenu">
        <li className="NavigationElement">
          <span className="NavigationTitle"> Home</span>
        </li>
        <li className="NavigationElement">
          <span className="NavigationTitle"> About Us</span>
        </li>
        <li className="NavigationElement">
          <span className="NavigationTitle"> Our Services</span>
        </li>
        <li className="NavigationElement">
          <span className="NavigationTitle"> Contact Us</span>
        </li>
        <li className="NavigationElement">
          <span className="NavigationTitle"> Our Team</span>
        </li>
      </ul>
    </div>
  );
};

export default NavigationItems;
