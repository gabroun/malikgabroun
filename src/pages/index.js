import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';

import { Blog } from '../components/Blog';
import { PortfolioList } from '../components/Portfolio';
import cv from '../../static/Malik-Elgabroun_CV.pdf';

import theme from '../components/styles/theme';

import * as S from '../components/styles/index';

class Index extends React.Component {
  render() {
    const { data } = this.props;

    const post = data.post.edges;
    const portfolio = data.portfolio.edges;

    return (
      <ThemeProvider theme={theme}>
        <div>
          <Layout title="Malik Elgabroun - Front End Developer">
            <S.MainContent className="main-content">
              <h1 className="intro-title">Hello My name is Malik</h1>
              <p className="intro-subtitle">
                and I'm a London-based Front end Developer
              </p>
              <S.ButtonContainer>
                <S.Button>
                  <Link to="/about">About me</Link>
                </S.Button>
                <S.Button>
                  <a href={cv}>Resume</a>
                </S.Button>
              </S.ButtonContainer>
              <S.LatestSection>
                <S.Header>Latest Posts</S.Header>

                <Blog edges={post} />
              </S.LatestSection>
              <S.LatestSection>
                <S.Header>Latest Projects</S.Header>

                <PortfolioList edges={portfolio} />
              </S.LatestSection>
            </S.MainContent>
          </Layout>
        </div>
      </ThemeProvider>
    );
  }
}

export default Index;
export const query = graphql`
  query {
    post: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { ne: "portfolio" } } }
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            path
            date(formatString: "DD MMMM YYYY")
            summary
            images
            tags
            type
          }
        }
      }
    }
    portfolio: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            images
            tags
            type
          }
        }
      }
    }
    siteMetaData: site {
      siteMetadata {
        title
      }
    }
  }
`;
