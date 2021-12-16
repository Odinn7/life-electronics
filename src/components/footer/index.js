import React from "react";
import gmail from "../../assets/images/gmail.png";
import map from "../../assets/images/map.png";
import consulting from "../../assets/images/consulting.png";
import "./index.css";

export const Footer = () => {
  return (
    <footer>
      <div className='contactImages'>
        <a className="footerContent">
          <div>
            <img className='gmail' src={gmail} />
          </div>
          <div className='footerIamgesText'>sales@l-e.az</div>
        </a>
        <a  className="footerContent">
          <div>
            <img className='consulting' src={consulting} />
          </div>
          <div className='footerIamgesText'>(+994) 51 583 86 85</div>
        </a>
        <a className="footerContent">
          <div>
            <img className='map' src={map} />
          </div>
          <div className='footerIamgesText'>184 Nizami St, Baku</div>
        </a>
      </div>
      <div className='footerText'>Life Electronics 2021 - Bütün hüquqları qorunur.</div>
      </footer>
  );
};
