import { graphql } from 'gatsby';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BlogPost } from '../components/Blog';
import * as S from '../components/styles/blog';
import Layout from '../components/Layout';
import { theme } from '../components/styles/theme';

import Search from '../components/Search';

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
        <Search />
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
              <div key={path}>
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
              </div>
            );
          })}
        </S.BlogList>
      </Layout>
    </ThemeProvider>
  );
};

export default Blog;
