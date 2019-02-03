import React from 'react';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import { BlogPost } from '../components/Blog';
import BlogList from '../components/styles/BlogList';
import theme from '../components/styles/theme';

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    );
  }
}

export default Blog;
export const query = graphql`
  query getBlogData {
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
  }
`;
