import React from "react";
import service from "../../assets/images/service.png";
import programming from "../../assets/images/programming.png";
import consulting from "../../assets/images/consulting.png";
import { Button } from "../buttons";
import {
  ServiceWrapper,
  ServicserviceCard,
  ServiceCardTxt,
  ServiceImg,
} from "./styled";

import "./styled";

export const Service = () => {
  return (
    <ServiceWrapper id="services">
      <ServicserviceCard>
        <ServiceImg src={service} />
        <ServiceCardTxt>It service</ServiceCardTxt>
        <Button btnText="Әlavә" border color left top hoverColor />
      </ServicserviceCard>

      <ServicserviceCard>
        <ServiceImg src={programming} />
        <ServiceCardTxt>Proqramming</ServiceCardTxt>
        <Button btnText="Әlavә" border color left top hoverColor />
      </ServicserviceCard>

      <ServicserviceCard>
        <ServiceImg src={consulting} />
        <ServiceCardTxt>It consulting</ServiceCardTxt>
        <Button btnText="Әlavә" border color left top hoverColor />
      </ServicserviceCard>
    </ServiceWrapper>
  );
};
