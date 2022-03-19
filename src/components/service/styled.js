import styled from "styled-components";

export const ServiceWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 1080px;
    background-color: #f1f3f6;
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

export const ServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: center;
    align-items: center;
    text-align: justify;
    border-radius: 15px;
    width: ${(props) => (props.isOpen ? "30vw" : "20vw")};
    height: ${(props) => (props.isOpen ? "80vh" : "45vh")};
    box-shadow: 10px 10px 15px 0 #888888;
    transition: all 1s;
    position: ${(props) => (props.isOpen ? "relative" : "")};
    overflow: hidden;
    padding: 40px 50px 0 50px;
  
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
  
  export const ServiceCardText = styled.div`
    margin-top: 20px;
    font-size: 1.5rem;
    width: 100%;
    
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

export const ServiceCardTitle = styled.div`
    margin-top: 20px;
    font-size: 2rem;
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

export const ServiceImg = styled.img`
    width: 120px;
    margin-top: 65px;
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
