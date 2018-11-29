import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout/index';
import { css } from 'react-emotion';
import styled from 'styled-components';
import '../styles/styles.css';
import Post from '../components/Blog/index';
import Portfolio from '../components/Portfolio';

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  top: 25px;
  position: relative;
`;

const Button = styled.div`
  border: solid 1px #f47c48;
  border-radius: 3px;

  padding: 15px;
  cursor: pointer;
  width: 150px;
  box-sizing: border-box;

  &:hover {
    background-color: #f47c48;
    transition: all 0.4s ease 0.1s;

    a {
      color: white;
      transition: all 0.4s ease 0.1s;
    }
  }

  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
const H1 = styled.h1`
  font-family: 'Playfair Display', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const H2 = styled.h2`
  font-family: 'Playfair Display', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
`;

const BlogList = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1280px;
  margin: 0 auto;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const PortfolioList = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  column-gap: 10px;
`;

const LatestPosts = styled.div`
  margin-top: 200px;
  text-align: left;
`;
class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
      <div>
        <Layout title="Malik Elgabroun - Front End Developer">
          <MainContent className="main-content">
            <H1>Hello My name is Malik</H1>
            <p> and I'm a London-based Front end Developer</p>
            <ButtonContainer>
              <Button className="btn">
                <Link to="/about">About me</Link>
              </Button>
              <Button className="btn">
                <Link to="/resume">Resume</Link>
              </Button>
            </ButtonContainer>
            <LatestPosts>
              <H2>Latest Posts</H2>

              {
                <BlogList className="blogpost__list">
                  {edges
                    .filter(function(edge) {
                      return edge.node.frontmatter.type !== 'portfolio';
                    })
                    .map(function(edge) {
                      const {
                        path,
                        title,
                        summary,
                        images,
                        date,
                        tags,
                      } = edge.node.frontmatter;
                      const { timeToRead } = edge.node;

                      return (
                        <Post
                          path={path}
                          title={title}
                          summary={summary}
                          image={images}
                          timeToRead={timeToRead}
                          date={date}
                          tags={tags}
                          key={path}
                        />
                      );
                    })}
                </BlogList>
              }
            </LatestPosts>
            <div
              className={css`
                margin-top: 200px;
              `}
            >
              <H2>Latest Projects</H2>
              <div className="portfolio__list">
                <PortfolioList style={{}}>
                  {edges
                    .filter(function(edge) {
                      return edge.node.frontmatter.type === 'portfolio';
                    })
                    .map(edge => {
                      const { title, path, images } = edge.node.frontmatter;

                      return (
                        <Portfolio
                          title={title}
                          path={path}
                          image={images}
                          key={path}
                        />
                      );
                    })}
                </PortfolioList>
              </div>
            </div>
          </MainContent>
        </Layout>
      </div>
    );
  }
}
// filter: { frontmatter: { type: { ne: "portfolio" } } }
export default Index;
export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            path
            date
            summary
            images
            tags
            type
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
