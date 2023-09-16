import React, { useEffect, useState } from "react";

import "./CardService.css";
const CardService = ({ image }) => {
  return (
    <>
      <div className="cardService">
        <img
          src={image}
          alt="logo"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
};

export default CardService;
