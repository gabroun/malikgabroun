import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout/index';
import { Link, graphql } from 'gatsby';
import { map, includes, get, toUpper } from 'lodash/fp';
import { func } from 'prop-types';
require('../styles/blog.css');

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    console.log(edges);
    return (
      <div>
        <Header />
        <Layout>
          <div className="blogpost-list">
            {edges.map(function(edge) {
              const { path, title, summary, images } = edge.node.frontmatter;
              const url = require(`../resources/${images}`);
              console.log(url);
              return (
                <div key={path}>
                  <h2>
                    <Link to={path}>{title}</Link>
                  </h2>
                  <p>{summary}</p>
                  <img key={images} src={url} />
                </div>
              );
            })}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Blog;
export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            summary
            images
          }
        }
      }
    }
  }
`;
