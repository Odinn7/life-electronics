import React from "react";
import Bill from "../../assets/images/image1.png";
import Mark from "../../assets/images/image2.png";
import David from "../../assets/images/image3.png";
import John from "../../assets/images/image4.png";
import Gido from "../../assets/images/image5.png";
import Pavel from "../../assets/images/image6.png";
import Sergey from "../../assets/images/image7.png";
import Yevgen from "../../assets/images/image8.png";

import {
  PartnersWrapper,
  PartnersFirstPart,
  PartnersImage,
  PartnersImageAndText,
  PartnersSecondPart,
} from "./styled";

import "./styled";

export const Partners = () => {
  return (
    <PartnersWrapper id="partners">
      <PartnersFirstPart>
        <PartnersImageAndText>
          <PartnersImage src={Bill} />
          <div>Bill Gates</div>
        </PartnersImageAndText>
        <PartnersImageAndText>
          <PartnersImage src={Mark} />
          <div>Mark Zukerberg</div>
        </PartnersImageAndText>
        <PartnersImageAndText>
          <PartnersImage src={David} />
          <div>David Patterson</div>
        </PartnersImageAndText>
        <PartnersImageAndText>
          <PartnersImage src={John} />
          <div>John Carmak</div>
        </PartnersImageAndText>
      </PartnersFirstPart>
      <PartnersSecondPart>
        <PartnersImageAndText>
          <PartnersImage src={Gido} />
          <div>Gido van Rossum</div>
        </PartnersImageAndText>
        <PartnersImageAndText>
          <PartnersImage src={Pavel} />
          <div>Pavel Durov</div>
        </PartnersImageAndText>
        <PartnersImageAndText>
          <PartnersImage src={Sergey} />
          <div>Sergey Brin</div>
        </PartnersImageAndText>
        <PartnersImageAndText>
          <PartnersImage src={Yevgen} />
          <div>Yevgeny Kaspersky</div>
        </PartnersImageAndText>
      </PartnersSecondPart>
    </PartnersWrapper>
  );
};
