import React from 'react';
import Layout from '../components/Layout/index';
import { graphql } from 'gatsby';
import Post from '../components/Blog';

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
      <div>
        <Layout title="Blog - Malik Elgabroun">
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

              return (
                <Post
                  path={path}
                  title={title}
                  image={images}
                  summary={summary}
                  date={date}
                  tags={tags}
                  timeToRead={timeToRead}
                  key={path}
                />
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { ne: "portfolio" } } }
    ) {
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
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
  }
`;
