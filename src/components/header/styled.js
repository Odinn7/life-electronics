import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 80px;
    background-color: rgba(#282c37, 0.5);
    border-radius: 0 0 10px 10px;
  
  @media(max-width: 1680px){
    width: 1680px;
    height: 70px;
    box-shadow: 0 0 15px 0 #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: rgba(#282c37, 0.5);
    border-radius: 0 0 10px 10px;
  }
  @media(max-width: 1440px){
    width: 1440px;
    height: 80px;
    box-shadow: 0 0 15px 0 #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: rgba(#282c37, 0.5);
    border-radius: 0 0 10px 10px;
  }
  @media(max-width: 1280px){
  	width: 1280px;
    height: 60px;
    box-shadow: 0 0 15px 0 #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: rgba(#282c37, 0.5);
    border-radius: 0 0 10px 10px;
  }
  @media(max-width: 1024px){
  	width: 1024px;
    height: 50px;
    box-shadow: 0 0 15px 0 #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: rgba(#282c37, 0.5);
    border-radius: 0 0 10px 10px;
  }
  @media(max-width: 800px){
    width: 800px;
    height: 40px;
    box-shadow: 0 0 15px 0 #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: rgba(#282c37, 0.5);
    border-radius: 0 0 10px 10px;
  }
  @media(max-width: 480px){
  	width: 480px;
    height: 20px;
    box-shadow: 0 0 15px 0 #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: rgba(#282c37, 0.5);
    border-radius: 0 0 10px 10px;
}
`;

export const CompanyLogo = styled.img`
    display: flex;
    margin-left: 60px;
    @media(max-width: 1680px){
      width: 50px;
    }
    @media(max-width: 1440px){
      width: 45px;
    }
    @media(max-width: 1280px){
      width: 40px;
    }
    @media(max-width: 1000px){
      width: 35px;
    }
    @media(max-width: 720px){
      width: 30px;
    }
    @media(max-width: 480px){
      width: 25px;
    }
  
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  @media(max-width: 1680px){
  	width: 500px;
  }
  @media(max-width: 1440px){
    width: 45px;
  }
  @media(max-width: 1280px){
    width: 40px;
  }
  @media(max-width: 1000px){
    width: 35px;
  }
  @media(max-width: 720px){
    width: 30px;
  }
  @media(max-width: 480px){
    width: 25px;
  }
`;
