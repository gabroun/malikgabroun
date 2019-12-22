import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Seo from '../components/Seo';
import formatDate from '../utils/formatDate';

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

const Post = ({ data }) => {
  const { markdownRemark } = data;
  const {
    title,
    date,
    path,
    summary,
    imageAuthor,
    imageAuthorID,
    keywords,
  } = markdownRemark.frontmatter;
  const { html, timeToRead } = markdownRemark;
  return (
    <div>
      <Layout title={title}>
        <Seo
          title={title}
          pathSlug={path}
          description={summary}
          image={data.file.childImageSharp.fluid}
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
            fluid={data.file.childImageSharp.fluid}
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

          <PostTemplate
            className="blogpost"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query($pathSlug: String!, $image: String!) {
    site {
      siteMetadata {
        title
        author
        twitter
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
        path
        summary
        imageAuthor
        imageAuthorID
        keywords
      }
      timeToRead
    }
    file(relativePath: { eq: $image }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        #fixed(width: 864) {
        #  ...GatsbyImageSharpFixed
        #}
        fluid(maxWidth: 600) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Post;
