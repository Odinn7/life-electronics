import styled from "styled-components";

export const HeaderWrapper = styled.div`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: rgba(#282c37, 0.5);
    border-radius: 0 0 10px 10px;
    box-shadow: 0 0 15px 0 #000000;
    position: relative;
  }
`;

export const CompanyLogo = styled.img`
  && {
    display: flex;
    margin-left: 60px;
  }
`;

export const ButtonsContainer = styled.div`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
