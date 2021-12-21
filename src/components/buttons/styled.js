import styled from "styled-components";

export const BtnURL = styled.a`
  && {
    text-decoration: none;
  }
`;

export const ButtonWrapper = styled.button`
  && {
    display: flex;
    margin-right: ${(props) => (props.right ? "30px" : "")};
    width: inherit;
    background: inherit;
    border: none;
  }
`

export const ButtonText = styled.p`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    border: ${(props) =>
      props.border ? "1px solid black" : "1px solid white"};
    color: ${(props) => (props.color ? "black" : "white")};
    border-radius: 12px;
    width: 160px;
    height: 40px;
    font-size: 1.2rem;
    font-family: Roboto;
    margin-left: ${(props) => (props.left ? "105px" : "")};
    margin-top: ${(props) => (props.top ? "110px" : "")};
  }
  &:hover {
    cursor: pointer;
    background: ${(props) => (props.background ? "white" : "#3f3f3f")};
    color: ${(props) => (props.hoverColor ? "white" : "black")};
    transition: 0.7s;
  }
`;
