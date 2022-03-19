import styled from "styled-components";
import toTopArrow from "../../assets/images/up-arrow-svgrepo-com.svg";

export const BottomButtonWrapper = styled.a`
  
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
  
    :hover{
      box-shadow: 0 0 25px black;
    }

  @media(max-width: 1680px){

  }
  @media(max-width: 1440px){

  }
  @media(max-width: 1280px){

  }
  @media(max-width: 1000px){

  }
  @media(max-width: 720px){

  }
  @media(max-width: 480px){

  }
  
`;
