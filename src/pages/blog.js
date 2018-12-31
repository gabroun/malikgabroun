import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { BlogPost } from '../components/Blog';
import BlogList from '../components/styles/BlogList';

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
      <div>
        <Layout title="Blog">
          <BlogList>
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
                <BlogPost
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
          </BlogList>
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
            date(formatString: "DD MMMM YYYY")
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
