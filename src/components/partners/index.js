import React from "react";
import bill from "../../assets/images/image1.png";
import mark from "../../assets/images/image2.png";
import david from "../../assets/images/image3.png";
import john from "../../assets/images/image4.png";
import gido from "../../assets/images/image5.png";
import pavel from "../../assets/images/image6.png";
import sergey from "../../assets/images/image7.png";
import yevgen from "../../assets/images/image8.png";
import "./index.css";

export const Partners = () => {
  return (
    <div className="partners" id='partners'>
      <div className="partnersFirstPart">
        <div className="partnersImgAndTxt">
          <div className="partnersImg">
            <img src={bill} />
          </div>
          <div className="partnersName">Bill Gates</div>
        </div>
        <div className="partnersImgAndTxt">
          <div className="partnersImg">
            <img src={mark} />
          </div>
          <div className="partnersName">Mark Zukerberg</div>
        </div>
        <div className="partnersImgAndTxt">
          <div className="partnersImg">
            <img src={david} />
          </div>
          <div className="partnersName">David Patterson</div>
        </div>
        <div className="partnersImgAndTxt">
          <div className="partnersImg">
            <img src={john} />
          </div>
          <div className="partnersName">John Carmak</div>
        </div>
      </div>
      <div className="partnersSecondPart">
        <div className="partnersImgAndTxt">
          <div className="partnersImg">
            <img src={gido} />
          </div>
          <div className="partnersName">Gido van Rossum</div>
        </div>
        <div className="partnersImgAndTxt">
          <div className="partnersImg">
            <img src={pavel} />
          </div>
          <div className="partnersName">Pavel Durov</div>
        </div>
        <div className="partnersImgAndTxt">
          <div className="partnersImg">
            <img src={sergey} />
          </div>
          <div className="partnersName">Sergey Brin</div>
        </div>
        <div className="partnersImgAndTxt">
          <div className="partnersImg">
            <img src={yevgen} />
          </div>
          <div className="partnersName">Yevgeny Kaspersky</div>
        </div>
      </div>
    </div>
  );
};
