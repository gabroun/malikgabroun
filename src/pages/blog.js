import { graphql } from 'gatsby';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { ThemeProvider } from 'styled-components';
import algoliasearch from 'algoliasearch/lite';
import React from 'react';

import { BlogPost } from '../components/Blog';
import * as S from '../components/styles/blog';
import Layout from '../components/Layout';
import PostPreview from '../components/Blog/PostPreview';
import theme from '../components/styles/theme';

const searchClient = algoliasearch(
  'BGUSF9KOK6',
  '8eef2ca8fde45889902af36961a79eb6'
);

const App = () => (
  <InstantSearch
    searchClient={searchClient}
    indexName="malikgabroun.com's blog"
  >
    <SearchBox />
    <Hits hitComponent={PostPreview} />
  </InstantSearch>
);

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
        <App />
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
                {/* <PostPreview path={path} title={title} /> */}
                {/* <BlogPost
                  path={path}
                  title={title}
                  image={images}
                  summary={summary}
                  date={date}
                  tags={tags}
                  timeToRead={timeToRead}
                  key={path}
                /> */}
              </div>
            );
          })}
        </S.BlogList>
      </Layout>
    </ThemeProvider>
  );
};

export default Blog;
