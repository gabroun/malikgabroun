import styled, { createGlobalStyle } from "styled-components";

import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
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
    padding: 1em 0;
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
    /* color: #fff; */
  }
  .intro-subtitle {
    font-size: 20px;
    /* color: #fff; */
  }

  .main-content__banner {
    img {
      max-width: 600px;
      width: 100%;
    }
  }

  .main-content__background {
    content: "";
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
  @media (min-width: 768px) {
    width: 650px;
  }
  @media (max-width: 767px) {
    grid-gap: 10px;
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  border: solid 1px ${theme.orange};
  padding: 15px;
  cursor: pointer;
  width: 150px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 40px;

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
    display: block;
  }
`;

export const Header = styled.h2`
  text-align: center;
  display: inline-block;
  &:after {
    content: "";
    display: block;
    width: 84%;
    border-radius: 4px;
    height: 6px;
    margin: 10px auto 0;
    background-color: #f47c48;
  }
`;

export const LatestSection = styled.section`
  margin-top: 200px;
`;

export const Items = styled.div`
  display: flex;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    max-width: 490px;
    border: solid 1px#efefef;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    border-radius: 8px;

    padding: 10px;

    &:hover {
      transition: all 0.4s ease 0.1s;
      transform: translateY(-5%);
      background: #efefef;
    }
  }

  img {
    max-width: 55%;
    margin-right: 8px;
  }

  h2 {
    line-height: 1.2em;
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
  }
`;
