import React from "react";
import mainLogo from "../../assets/images/logo.png";
import { Button } from "../buttons";
import "./index.css";

export const Header = () => {
  return (
    <header>
      <div className="companyLogo">
        <img src={mainLogo} />
      </div>
      <div className="buttonsContainer">
        <Button btnText="Şirkət haqqında" goTo="#aboutCompany" />
        <Button btnText="Xidmətlərimiz" goTo="#services" />
        <Button btnText="Layihəmiz" goTo="#projects" />
        <Button btnText="Partnyolarimiz" goTo="#partners" />
      </div>
    </header>
  );
};
