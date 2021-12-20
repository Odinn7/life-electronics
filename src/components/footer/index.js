import React from "react";
import gmail from "../../assets/images/gmail.png";
import map from "../../assets/images/map.png";
import consulting from "../../assets/images/consulting.png";
import {
  FooterContact,
  FooterContentContainer,
  FooterImage,
  FooterImageText,
  FooterText,
  FooterWrapper,
} from "./styled";
import "./styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContentContainer>
        <FooterContact target="_blank" href="mailto: sales@l-e.az">
          <FooterImage
            src={gmail}
            style={{ marginRight: "7px", width: "15px" }}
          />
          <FooterImageText cursor>sales@l-e.az</FooterImageText>
        </FooterContact>
        <FooterContact href="tel:+994515838685">
          <FooterImage
            src={consulting}
            style={{ marginRight: "7px", width: "20px" }}
          />
          <FooterImageText cursor>(+994) 51 583 86 85</FooterImageText>
        </FooterContact>
        <FooterContact
          target="_blank"
          href="https://www.google.com/maps/place/184+Nizami+St,+Baku/data=!4m2!3m1!1s0x40307d076ce3896b:0xe1d91764e60aa9c6?sa=X&ved=2ahUKEwi1juztjfL0AhU5S_EDHXIABLEQ8gF6BAgTEAE"
        >
          <FooterImage
            src={map}
            style={{ marginRight: "7px", width: "20px" }}
          />
          <FooterImageText cursor>184 Nizami St, Baku</FooterImageText>
        </FooterContact>
      </FooterContentContainer>
      <FooterText>Life Electronics 2021 - Bütün hüquqları qorunur.</FooterText>
    </FooterWrapper>
  );
};
