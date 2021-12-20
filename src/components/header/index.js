import React from "react";
import mainLogo from "../../assets/images/logo.png";
import { Button } from "../buttons";
import { HeaderWrapper, CompanyLogo, ButtonsContainer } from "./styled";
import "./styled";

export const Header = () => {
  return (
    <HeaderWrapper id="header">
      <CompanyLogo src={mainLogo} />
      <ButtonsContainer>
        <Button
          btnText="Şirkət haqqında"
          goTo="#aboutCompany"
          right
          background
        />
        <Button btnText="Xidmətlərimiz" goTo="#services" right background />
        <Button btnText="Layihəmiz" goTo="#projects" right background />
        <Button btnText="Partnyolarimiz" goTo="#partners" right background />
      </ButtonsContainer>
    </HeaderWrapper>
  );
};
