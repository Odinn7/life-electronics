import styled from "styled-components";

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #dcdcdc;
    width: 100%;
    height: 80px;
    font-size: 0.9rem;
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

export const FooterContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 10px;
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

export const FooterContact = styled.a`
  
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    margin: 0 25px 10px 0;
    text-decoration: none;
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

export const FooterImage = styled.img`
    :hover {
      cursor: pointer;
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

export const FooterImageText = styled.div`
  :hover {
      cursor: ${(props) => props.cursor ? "pointer" : "text"};
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

export const FooterText = styled.div`
  
    font-weight: 900;

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
