import React from "react";
import backgroundLogo from '../../assets/images/backgroundLogo.png'
import { AboutBoldText, AboutImage, AboutPage, AboutText } from "./styled";


import './styled'


export const About = () => {
  return (
    <AboutPage id='aboutCompany'>
        <AboutText>
          <AboutBoldText>Life Electronics</AboutBoldText> Şirkət 2016-ci ildə təsis edilmişdi. Şirkət müasir
          biznes effektivliyinin artırılması və potensialın aşkar edilməsi
          məqsədi üçün informasiya texnologiyaları sahəsində kompüter
          avadanlıqları və proqram təminatı üzrə təchizatçıdır.<br/><br/>
          Şirkət, aparıcı
          İT istehsalçıları tərəfindən geniş çeşiddə kompüter komponentlərini,
          İT və proqramlaşdırma xidmətlərini, həmçinin proqram təminatının
          lisenziyalaşdırılmasını təmin edir.
        </AboutText>
        <AboutImage src={backgroundLogo}/>
    </AboutPage>
  );
};
