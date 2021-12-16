import React from "react";
import backgroundLogo from '../../assets/images/backgroundLogo.png'
import "./index.css";

export const About = () => {
  return (
    <div className='aboutPage' id='aboutCompany'>
      <div className="aboutText">
        <div className="text">
          <p className='aboutBoldText'>Life Electronics</p> Şirkət 2016-ci ildə təsis edilmişdi. Şirkət müasir
          biznes effektivliyinin artırılması və potensialın aşkar edilməsi
          məqsədi üçün informasiya texnologiyaları sahəsində kompüter
          avadanlıqları və proqram təminatı üzrə təchizatçıdır.<br/><br/>
          Şirkət, aparıcı
          İT istehsalçıları tərəfindən geniş çeşiddə kompüter komponentlərini,
          İT və proqramlaşdırma xidmətlərini, həmçinin proqram təminatının
          lisenziyalaşdırılmasını təmin edir.
        </div>
      </div>
      <div className='aboutImage'>
        <img src={backgroundLogo}/>
      </div>
    </div>
  );
};
