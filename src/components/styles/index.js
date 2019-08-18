import styled, { injectGlobal } from 'styled-components';
import theme from './theme';

injectGlobal`
    html {
        box-sizing: border-box;
        font-family: 'Rambla';
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: 'Rambla';
    }
     a {
        text-decoration: none;
        color: ${theme.black};
    }

    pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: 0.3em;
    background-color: #282c34;
  }
`;

export const MainContent = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  .intro-title {
    font-size: 40px;
  }
  .intro-subtitle {
    font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  top: 25px;
  position: relative;
`;

export const Button = styled.button`
  border: solid 1px ${theme.orange};
  border-radius: 3px;
  padding: 15px;
  cursor: pointer;
  width: 150px;
  box-sizing: border-box;

  @media (max-width: 1023px) {
    background-color: #fff;
  }

  &:hover {
    background-color: ${theme.orange};
    transition: all 0.4s ease 0.1s;

    a {
      color: ${theme.white};
      transition: all 0.4s ease 0.1s;
    }
  }

  a {
    color: ${theme.black};
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const Header = styled.h2`
  text-align: center;
`;

export const LatestSection = styled.section`
  margin-top: 200px;
`;
