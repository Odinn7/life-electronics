import styled from "styled-components";

export const BtnURL = styled.a`
  text-decoration: none;
  @media (max-width: 1680px) {

  }
  @media (max-width: 1440px) {

  }
  @media (max-width: 1280px) {

  }
  @media (max-width: 1000px) {

  }
  @media (max-width: 720px) {

  }
  @media (max-width: 480px) {

  }
`;

export const ButtonWrapper = styled.button`
  display: ${ ( props ) =>
          ( props.display ? "flex" : "block" ) };
  margin-right: ${ ( props ) => ( props.right ? "30px" : "" ) };
  width: inherit;
  background: inherit;
  border: none;
  

  @media (max-width: 1680px) {
    display: flex;
    margin-right: ${ ( props ) => ( props.right ? "30px" : "" ) };
    width: inherit;
    background: inherit;
    border: none;
  }
  @media (max-width: 1440px) {
    display: flex;
    margin-right: ${ ( props ) => ( props.right ? "30px" : "" ) };
    width: inherit;
    background: inherit;
    border: none;
  }
  @media (max-width: 1280px) {
    display: flex;
    margin-right: ${ ( props ) => ( props.right ? "30px" : "" ) };
    width: inherit;
    background: inherit;
    border: none;
  }
  @media (max-width: 1000px) {
    display: flex;
    margin-right: ${ ( props ) => ( props.right ? "30px" : "" ) };
    width: inherit;
    background: inherit;
    border: none;
  }
  @media (max-width: 720px) {
    display: flex;
    margin-right: ${ ( props ) => ( props.right ? "30px" : "" ) };
    width: inherit;
    background: inherit;
    border: none;
  }
  @media (max-width: 480px) {
    display: flex;
    margin-right: ${ ( props ) => ( props.right ? "5px" : "" ) };
    width: inherit;
    background: inherit;
    border: none;
  }
`

export const ButtonText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: ${ ( props ) =>
          props.border ? "1px solid black" : "1px solid white" };
  color: ${ ( props ) => ( props.color ? "black" : "white" ) };
  border-radius: 12px;
  width: 160px;
  height: 40px;
  font-size: 1.2rem;
  font-family: Roboto;
  margin-left: ${ ( props ) => ( props.left ? "105px" : "" ) };
  margin-top: ${ ( props ) => ( props.top ? "110px" : "" ) };

  :hover {
    cursor: pointer;
    background: ${ ( props ) => ( props.background ? "white" : "#3f3f3f" ) };
    color: ${ ( props ) => ( props.hoverColor ? "white" : "black" ) };
    transition: 0.7s;

    @media (max-width: 1680px) {

    }
    @media (max-width: 1440px) {

    }
    @media (max-width: 1280px) {

    }
    @media (max-width: 1000px) {

    }
    @media (max-width: 720px) {

    }
    @media (max-width: 480px) {

    }
`;
