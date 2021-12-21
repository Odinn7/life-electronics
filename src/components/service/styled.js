import styled from "styled-components";

export const ServiceWrapper = styled.div`
  && {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 1080px;
    background-color: #f1f3f6;
  }
`;
export const ServiceCard = styled.div`
  && {
    background-color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 15px;
    width: ${(props) => (props.isOpen ? "40vw" : "20vw")};
    height: ${(props) => (props.isOpen ? "80vh" : "45vh")};
    box-shadow: 10px 10px 15px 0 #888888;
    transition: all 1s cubic-bezier(0, 0, 1, 1) 500ms;
    position: ${(props) => (props.isOpen ? "relative" : "")};
  }
`;

export const ServiceCardText = styled.div`
  && {
    margin-top: 20px;
    font-size: 2rem;
    font-family: Roboto;
  }
`;

export const ServiceCardTitle = styled.div`
  && {
    margin-top: 20px;
    font-size: 2rem;
    font-family: Roboto;
  }
`;

export const ServiceImg = styled.img`
  && {
    width: 120px;
    margin-top: 65px;
  }
`;
