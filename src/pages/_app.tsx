import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
font-family: 'FiraMono';
src: url('/fonts/fira-mono-regular.woff2');
font-weight: 400;
font-style: normal;
font-display: swap;
}

@font-face {
font-family: 'FiraMono-Bold';
src: url('/fonts/fira-mono-bold.woff2');
font-weight: 700;
font-style: normal;
font-display: swap;
}

@font-face {
font-family: 'Aleo';
src: url('/fonts/Aleo/Aleo-Regular.ttf') ;
font-weight: 400;
font-style: normal;
font-display: swap;
}

@font-face {
font-family: 'Aleo-Bold';
src: url('/fonts/Aleo/Aleo-Bold.ttf');
font-weight: 700;
font-style: normal;
font-display: swap;
}

body {
  font-family: 'Aleo'
}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
