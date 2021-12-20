import styled from "styled-components";

export const MainPageWrapper = styled.div`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 335px 0 0 90px;
    width: 180px;
  }
`;

export const MainText = styled.div`
  && {
    @font-face {
      font-family: Arimo;
      src: url("../../assets/fonts/Arimo/arimo.woff");
    }
    display: flex;
    color: white;
    font-family: Arimo;
    font-size: 96px;
    margin-bottom: 15px;
  }
`;
