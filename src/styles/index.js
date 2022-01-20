import styled, { createGlobalStyle } from "styled-components";

import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Fira Mono';
        src: local('Fira Mono'), url("../static/fonts/fira-mono-regular.woff2");
        font-weight: 400;      
    }
    @font-face {
        font-family: 'Fira Mono';
        src: local('Fira Mono'), url("../static/fonts/fira-mono-bold.woff2");
        font-weight: 700;
    }
    html {
        box-sizing: border-box;
        font-family: 'Fira Mono';
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: 'Fira Mono';
    }
     a {
        text-decoration: none;
        color: ${theme.black};
    }

    pre[class*="language-"] {
    padding: 1em 0;
    margin: 1.5em 0;
    overflow: auto;
    border-radius: 0.3em;
    background-color: #282c34;
  }

  .sp-wrapper {
    margin-left: -20px;
    margin-right: -20px;
  }

  .sp-layout {
    background: inherit;
    border: 1px solid #e4e7eb;
  }

  p {
    margin-top: 1.5em;
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
      margin: 0 auto;
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
  flex-wrap: wrap;
  a {
    display: flex;
    align-items: center;
    max-width: 490px;
    border: solid 1px#efefef;
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
    border-radius: 8px;
    margin: 10px;
    padding: 10px;

    &:hover {
      /* background: ${(props) => props.theme.whiteSmoke}; */
      transform: translateY(-5%);
      transition: all 0.4s ease 0.1s;
      box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px,
        rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 25%) 0px 25px 50px -12px;
    }
  }

  img {
    /* max-width: 55%; */
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
