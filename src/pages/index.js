import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout/index';
import { css } from 'react-emotion';
import '../styles/styles.css';
import Helmet from 'react-helmet';
class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;
    const { site } = data;

    return (
      <div>
        <Layout data={site.siteMetadata.title}>
          <Helmet>
            <title>Malik Elgabroun - Front-End Developer</title>

            <meta
              name="google-site-verification"
              content="rdHghgE19nXaz19_OXvkv_MuEOSHl8lQPesWUmp21oU"
            />
            <html lang="en" />
          </Helmet>
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
              <div className="blogpost__list">
                {edges.map(function(edge) {
                  const {
                    path,
                    title,
                    summary,
                    images,
                    date,
                    tags,
                  } = edge.node.frontmatter;
                  const { timeToRead } = edge.node;
                  const url = require(`../resources/${images}`);
                  return (
                    <div className="blogpost__item" key={path}>
                      <Link to={path}>
                        <img key={images} src={url} />
                        <div className="blogpost__preview">
                          <div className="blogpost__tags">
                            <svg
                              fill="currentColor"
                              preserveAspectRatio="xMidYMid meet"
                              height="14px"
                              width="14px"
                              viewBox="0 0 40 40"
                              className={css`
                                vertical-align: middle;
                              `}
                            >
                              <g>
                                <path d="m9.5 10.5q0-1.2-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.8-1.9z m22.7 12.2q0 1.1-0.8 1.9l-10.4 10.5q-0.8 0.8-2 0.8-1.1 0-1.9-0.8l-15.2-15.2q-0.8-0.8-1.3-2.2t-0.6-2.5v-8.8q0-1.1 0.8-1.9t1.9-0.8h8.9q1.1 0 2.5 0.5t2.1 1.4l15.2 15.2q0.8 0.8 0.8 1.9z m8.2 0q0 1.1-0.8 1.9l-10.5 10.5q-0.8 0.8-1.9 0.8-0.8 0-1.2-0.3t-1.2-1l10-10q0.8-0.8 0.8-1.9 0-1.1-0.8-1.9l-15.2-15.2q-0.8-0.8-2.1-1.4t-2.5-0.5h4.7q1.2 0 2.5 0.5t2.2 1.4l15.2 15.2q0.8 0.8 0.8 1.9z" />
                              </g>
                            </svg>
                            {tags.map((tag, index) => (
                              <p className="blogpost__tag" key={index}>
                                {tag}
                              </p>
                            ))}
                          </div>

                          <h2>{title}</h2>
                          <p className="blogpost__summary">{summary}</p>
                          <p className="blogpost__date">{date}</p>
                          <p className="blogpost__timeToRead">
                            {timeToRead} min read
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

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
