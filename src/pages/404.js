import styled, { ThemeProvider } from "styled-components";

import Layout from "@components/Layout";
import { Link } from "gatsby";
import React from "react";
import theme from "@components/styles/theme";

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
  }
`;
const NotFoundPage = () => {
  const imgPath = require(`@resources/404.svg`);
  return (
    <ThemeProvider theme={theme}>
      <Layout title="Page not found">
        <Container>
          <h1>Page not found</h1>
          <img src={imgPath} alt="page not found - 404" />
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
