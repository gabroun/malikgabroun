import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import React from 'react';

import { BlogPost } from '../components/Blog';
import * as S from '../components/styles/blog';
import Layout from '../components/Layout';
import theme from '../components/styles/theme';

export const query = graphql`
  query allmdx {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      nodes {
        frontmatter {
          title
          path
          date
          summary
          images
          tags
        }
        timeToRead
      }
    }
  }
`;

const Blog = ({ data: { allMdx: posts } }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout title="Blog">
        <S.BlogList>
          {posts.nodes.map(post => {
            const {
              path,
              title,
              summary,
              images,
              date,
              tags,
            } = post.frontmatter;
            const { timeToRead } = post;

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
};

export default Blog;
