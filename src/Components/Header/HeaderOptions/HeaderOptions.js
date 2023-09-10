import React from "react";
import "./HeaderOptions.css";
const HeaderOptions = ({ avatar, title, Icon, iconHandler, children }) => {
  return (
    <div className="header__options" onClick={iconHandler}>
      {Icon && <Icon className="headerOptions__icon" />}
      <h3 className="headerOptions__title">{title}</h3>
      {children}
    </div>
  );
};

export default HeaderOptions;
