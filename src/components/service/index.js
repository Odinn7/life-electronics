import React, { useState } from "react";
import service from "../../assets/images/service.png";
import programming from "../../assets/images/programming.png";
import consulting from "../../assets/images/consulting.png";
import { Button } from "../buttons";
import {
  ServiceWrapper,
  ServiceCard,
  ServiceCardTitle,
  ServiceImg,
  ServiceCardText,
} from "./styled";

import "./styled";

export const Service = () => {

  const [isOpenItService, setIsOpenItService] = useState(false);
  const [isOpenProgramming, setIsOpenProgramming] = useState(false);
  const [isOpenConsulting, setIsOpenConsulting] = useState(false);

  return (
    <ServiceWrapper id="services">
      <ServiceCard isOpen={isOpenItService}>
        { isOpenItService ? 
        <> 
          <ServiceCardText> asdasdas</ServiceCardText> 
          <Button btnText="Close" border color left top hoverColor onClick={() => setIsOpenItService(!isOpenItService)}/>
        </>
         : 
        <>
          <ServiceImg src={service} />
          <ServiceCardTitle>It service</ServiceCardTitle> 
          <Button btnText="Әlavә" border color left top hoverColor onClick={() => setIsOpenItService(!isOpenItService)}/>
        </> 
        }
      </ServiceCard>

      <ServiceCard isOpen={isOpenProgramming}>
        {
        isOpenProgramming ? 
        <> 
          <ServiceCardText> asdasdas</ServiceCardText>
          <Button btnText="Close" border color left top hoverColor onClick={() => setIsOpenProgramming(!isOpenProgramming)}/>
        </>
          :
        <>
          <ServiceImg src={programming} />  
          <ServiceCardTitle>Proqramming</ServiceCardTitle> 
          <Button btnText="Әlavә" border color left top hoverColor onClick={() => setIsOpenProgramming(!isOpenProgramming)}/>
        </> 
           } 
      </ServiceCard>

      <ServiceCard isOpen={isOpenConsulting}>
      {
        isOpenConsulting ? 
      <> 
        <ServiceCardText> asdasdas</ServiceCardText>
        <Button btnText="Close" border color left top hoverColor onClick={() => setIsOpenConsulting(!isOpenConsulting)}/>
      </>
          :
      <>
        <ServiceImg src={consulting} />
        <ServiceCardTitle>It consulting</ServiceCardTitle>
        <Button btnText="Әlavә" border color left top hoverColor onClick={() => setIsOpenConsulting(!isOpenConsulting)}/></> 
      } 
        
      </ServiceCard>
    </ServiceWrapper>
  );
};
