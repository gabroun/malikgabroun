import React from 'react';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import { BlogPost } from '../components/Blog';
import theme from '../components/styles/theme';

import * as S from '../components/styles/blog';

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
      <ThemeProvider theme={theme}>
        <Layout title="Blog">
          <S.BlogList>
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
          </S.BlogList>
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
            date
            summary
            images
            tags
          }
        }
      }
    }
  }
`;
