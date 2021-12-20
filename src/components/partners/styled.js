import styled from "styled-components";
import Bill from "../../assets/images/image1.png";
// import Mark from "../../assets/images/image2.png";
// import David from "../../assets/images/image3.png";
// import John from "../../assets/images/image4.png";
// import Gido from "../../assets/images/image5.png";
// import Pavel from "../../assets/images/image6.png";
// import Sergey from "../../assets/images/image7.png";
// import Yevgen from "../../assets/images/image8.png";

export const PartnersWrapper = styled.div`
  && {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    background-color: #f1f3f6;
  }
`;

export const PartnersFirstPart = styled.div`
  && {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const PartnersSecondPart = styled.div`
&& {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
}
`;

export const PartnersImageAndText = styled.div`
  && {
    margin-right: 90px;
  }
`;

export const PartnersImage = styled.img`
  && {
  }
`;
