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
    <nav className="NavigationItems">
      <ul className="NavigationMenu">
        <li className="NavigationElement">
          <span className="NavigationTitle"> About</span>
        </li>
        <li className="NavigationElement">
          <span className="NavigationTitle"> About</span>
        </li>
        <li className="NavigationElement">
          <span className="NavigationTitle"> About</span>
        </li>
        <li className="NavigationElement">
          <span className="NavigationTitle"> About</span>
        </li>
        <li className="NavigationElement">
          <span className="NavigationTitle"> About</span>
        </li>
        <li className="NavigationElement">
          <span className="NavigationTitle"> About</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationItems;
