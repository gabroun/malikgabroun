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
        <div
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
        </div>
      </Layout>
    </div>
  );
};

export default Post;
