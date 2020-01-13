import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import formatDate from '../utils/formatDate';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Title = styled.h2`
  font-family: 'Rambla';
`;

const PostTemplate = styled.div`
  a {
    color: #f47c48;
    text-decoration: underline;
  }
`;

const PostWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  pre[class*='language-'] {
    position: relative;
    &::before {
      color: #232129;
      font-size: 0.75rem;
      letter-spacing: 0.075em;
      position: absolute;
      right: 1.5rem;
      text-transform: uppercase;
      top: 0px;
      border-radius: 0px 0px 4px 4px;
      padding: 0.25rem 0.5rem;
    }
  }

  pre[class$='language-shell'] {
    &::before {
      content: 'shell';
      background-color: #d9d7e0;
    }
  }
  pre[class$='language-jsx'] {
    &::before {
      content: 'jsx';
      background-color: #61dafb;
    }
  }

  pre[class$='language-graphql'] {
    &::before {
      content: 'GraphQL';
      color: #ffffff;
      background: rgb(225, 0, 152);
    }
  }

  pre[class$='language-js'],
  pre[class$='language-javascript'] {
    &::before {
      content: 'js';
      background-color: #f7df1e;
    }
  }
`;

const ImgCredit = styled.p`
  margin-bottom: 0;
  position: relative;
  top: -45px;
  text-align: center;
  a {
    color: #f47c48;
  }
`;

export const query = graphql`
  query($pathSlug: String!, $image: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
        date
        summary
        images
        imageAuthor
        imageAuthorID
        keywords
      }
      timeToRead
      body
    }
    file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Post = ({ data: { mdx: post, file: imgFile } }) => {
  const {
    title,
    date,
    path,
    summary,
    imageAuthor,
    imageAuthorID,
    keywords,
  } = post.frontmatter;
  const { timeToRead } = post;
  return (
    <div>
      <Layout title={title}>
        <Seo
          title={title}
          pathSlug={path}
          description={summary}
          image={imgFile.childImageSharp.fluid}
          keywords={keywords}
        />
        <PostWrapper
          className="post-wrapper"
          style={{ maxWidth: '960px', margin: '0 auto' }}
        >
          <Title>{title}</Title>
          <div style={{ display: 'flex', font: 'bold', margin: '15px 0' }}>
            <p>{formatDate(date)}.</p>
            <p style={{ marginLeft: '10px' }}>{timeToRead} min read.</p>
          </div>

          <Img
            fluid={imgFile.childImageSharp.fluid}
            style={{ maxHeight: '400px', marginBottom: '50px' }}
          />
          {imageAuthor && (
            <ImgCredit>
              Photo by
              <a href={`https://unsplash.com/${imageAuthorID}`} target="blank">
                {' '}
                {imageAuthor}
              </a>
            </ImgCredit>
          )}
          <MDXRenderer>{post.body}</MDXRenderer>
        </PostWrapper>
      </Layout>
    </div>
  );
};

export default Post;
