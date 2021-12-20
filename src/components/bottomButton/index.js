import React from "react";
import { BottomButtonWrapper } from "./styled";


export const BottomButton = ({ returnToTop }) => {
  return (
    <>
      <BottomButtonWrapper href={returnToTop}  />
    </>
  );
};
