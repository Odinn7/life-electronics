import React from "react";
import { BtnURL,  ButtonWrapper, BtnText } from './styled'
import "./styled";

export const Button = ({ btnText, goTo }) => {
  return (
    <BtnURL href={goTo}>
      <ButtonWrapper>
        <BtnText text={btnText} />
      </ButtonWrapper>
    </BtnURL>
  );
};
