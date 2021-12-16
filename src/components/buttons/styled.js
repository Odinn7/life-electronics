import styled from "styled-components";

export const BtnURL = styled.a`
  && {
    text-decoration: none;
  }
`;

export const ButtonWrapper = styled.div`
  && {
    display: flex;
    margin-right: 30px;
  }
`;

export const BtnText = styled.p`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 12px;
    width: 160px;
    height: 40px;
    color: white;
    background-color: inherit;
    font-size: 1.2rem;
    font-family: Roboto;
    btnText

    &:hover {
      cursor: pointer;
      background: white;
      color: black;
      transition: 0.7s;
    }
  }
`;
