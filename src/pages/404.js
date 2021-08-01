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
`;
class NotFoundPage extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout title="Page not found">
          <Container>
            <h1>Page not found</h1>
            <p>
              You can return to homeage by clicking
              <Link to="/"> here</Link>
            </p>
          </Container>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default NotFoundPage;
