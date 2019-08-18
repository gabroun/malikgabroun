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
  position: relative;
  .intro-title {
    font-size: 40px;
    color: #fff;
  }
  .intro-subtitle {
    font-size: 20px;
    color: #fff;
  }

  .main-content__background {
    content: '';
    position: absolute;
    background-color: #f47c48;
    box-sizing: border-box;
    z-index: -1;
    width: 100%;
    border-radius: 999px;
    top: -88vw;
    /* left: -10vw; */
    /* right: 5vw; */
    height: 117vw;

    @media (max-width: 1023px) {
      height: 177vw;
      top: -83vw;
    }
  }
`;

export const ButtonContainer = styled.div`
  /* display: flex;
  justify-content: space-evenly;
  top: 25px;
  position: relative; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  margin: 0 auto;
  top: 25px;
  position: relative;
  @media (min-width: 1024px) {
    width: 650px;
  }
  @media (max-width: 1023px) {
    grid-gap: 10px;
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  border: solid 1px ${theme.orange};
  border-radius: 3px;
  padding: 15px;
  cursor: pointer;
  width: 150px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 40px;
  border-color: grey;

  &:hover {
    /* background-color: ${theme.orange}; */
    transition: all 0.4s ease 0.1s;

    a {
      color: ${theme.orange};
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
