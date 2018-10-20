import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout/index';
import { Link, graphql } from 'gatsby';
import { func } from 'prop-types';

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const { allMarkdownRemark } = data;

    console.log(allMarkdownRemark);
    return (
      <div>
        <Header />
        <Layout>
          <h1>blog component</h1>
          <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
          <p>
            What do I like to do? Lots of course but definitely enjoy building
            websites.
          </p>
          <ul>
            {allMarkdownRemark.edges.map(function(item) {
              return (
                <li key={item.node.frontmatter.path}>
                  <h2>
                    <Link to={item.node.frontmatter.path}>
                      {item.node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>{item.node.frontmatter.excerpt}</p>
                </li>
              );
            })}
          </ul>
        </Layout>
      </div>
    );
  }
}

export default Blog;
export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
          rawMarkdownBody
        }
      }
    }
  }
`;
