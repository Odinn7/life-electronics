import styled from "styled-components";
import toTopArrow from "../../assets/images/arrow.png";

export const BottomButtonWrapper = styled.a`
  && {
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 70px;
    height: 70px;
    margin-right: 20px;
    background-image: url(${toTopArrow});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70px;
    
    border: none;
    border-radius: 500px;
    cursor: pointer;
  }
`;
