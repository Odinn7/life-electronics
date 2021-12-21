import React from "react";
import { Button } from "../buttons";
import { MainPageWrapper, MainText } from "./styled";
import "./styled";

export const MainPage = () => {
  console.log('-----------', MainPageWrapper, MainText, Button)
  return (
    <MainPageWrapper id="mainPage">
      <MainText>Life Electronics</MainText>
      <Button btnText="Әlavә mәlumat" goTo="#aboutCompany" />
    </MainPageWrapper>
  );
};
