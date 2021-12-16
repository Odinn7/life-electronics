import React from "react";
import { Button } from "../buttons";
import "./index.css";

export const MainPage = () => {
  return (
    <div className="mainPageStyle">
      <div className="mainText">Life Electronics</div>
      <Button btnText="Әlavә mәlumat" goTo='#aboutCompany'/>
    </div>
  );
};
