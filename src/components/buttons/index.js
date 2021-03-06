import React from "react";
import { BtnURL, ButtonWrapper, ButtonText } from "./styled";
import "./styled";

export const Button = ({
  btnText,
  goTo,
  color,
  border,
  left,
  right,
  top,
  background,
  hoverColor,
  onClick,
}) => {

  

  return (
    <BtnURL href={goTo}>
      <ButtonWrapper right={right} onClick={onClick}>
        <ButtonText
          color={color}
          border={border}
          left={left}
          top={top}
          background={background}
          hoverColor={hoverColor}
        >
          {btnText}
        </ButtonText>
      </ButtonWrapper>
    </BtnURL>
  );
};
