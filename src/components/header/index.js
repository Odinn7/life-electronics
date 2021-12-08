import React from "react";
import "./index.css";
import mainLogo from '../../assets/images/mainLogo.png'

export const Header = () => {
  return (
    <div className="header">
      <div className="companyName"><img src={mainLogo} style={{width: 280, margin: "70px 0 0 0" }}/></div>
    </div>
  );
};
