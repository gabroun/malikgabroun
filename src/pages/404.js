import styled, { ThemeProvider } from "styled-components";

import Layout from "@components/Layout";
import { Link } from "gatsby";
import React from "react";
import theme from "@styles/theme";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
  text-align: center;
  margin: 40px auto;
  a {
    color: #f47c48;
  }

  h1 {
    letter-spacing: 1px;
  }

  img {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
`;
const NotFoundPage = () => {
  const imgPath = require(`@resources/404.svg`).default;
  return (
    <ThemeProvider theme={theme}>
      <Layout title="Page not found">
        <Container>
          <h1>Page not found</h1>

          <StaticImage
            src="../resources/404.svg"
            alt="page not found - 404"
            placeholder="blurred"
            objectFit="contain"
          />
          <p>
            You can return to homepage by clicking
            <Link to="/"> here</Link>
          </p>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default NotFoundPage;
