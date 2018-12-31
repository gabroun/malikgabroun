import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Seo from '../components/Seo';

const Title = styled.h2`
  font-family: 'Playfair Display', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Post = ({ data }) => {
  const { markdownRemark, site } = data;
  const { title, date, path, summary } = markdownRemark.frontmatter;
  const { html, timeToRead } = markdownRemark;
  console.log(data);
  return (
    <div>
      <Layout title={title}>
        <Seo title={title} pathSlug={path} description={summary} />
        <div
          className="post-wrapper"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          <Title>{title}</Title>
          <div style={{ display: 'flex', font: 'bold', margin: '15px 0' }}>
            <p>{date}.</p>
            <p style={{ marginLeft: '10px' }}>{timeToRead} min read.</p>
          </div>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ maxHeight: '400px', marginBottom: '50px' }}
          />

          <div
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
        date(formatString: "DD MMMM YYYY")
        path
        summary
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
