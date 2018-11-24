import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout/index';
import { css } from 'react-emotion';
import '../styles/styles.css';
import Post from '../components/Blog';
import Portfolio from '../components/Portfolio';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;
    console.log(data);

    return (
      <div>
        <Layout title="Malik Elgabroun - Front End Developer">
          <div className="main-content">
            <h1>Hello My name is Malik</h1>
            <p> and I'm a London-based Front end Developer</p>
            <div className="buttons-container">
              <div className="btn">
                <Link to="/about">About me</Link>
              </div>
              <div className="btn">
                <Link to="/resume">Resume</Link>
              </div>
            </div>
            <div
              className={css`
                margin-top: 200px;
                text-align: left;
              `}
            >
              <h2
                className={css`
                  text-align: center;
                `}
              >
                Latest Posts
              </h2>

              {
                <div className="blogpost__list">
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
                </div>
              }
            </div>
            <div
              className={css`
                margin-top: 200px;
              `}
            >
              <h2>Latest Projects</h2>
              <div className="portfolio__list">
                <ul
                  style={{
                    display: 'grid',
                    listStyle: 'none',
                    gridTemplateColumns: '1fr 1fr',
                    justifyContent: 'center',
                    columnGap: '10px',
                  }}
                >
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
                </ul>
              </div>
            </div>
          </div>
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
