import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/index';

const Post = ({ data }) => {
  const { markdownRemark } = data;
  console.log(data);
  const { title, date, images } = markdownRemark.frontmatter;
  const { html, timeToRead } = markdownRemark;
  const url = require(`../resources/${images}`);
  return (
    <div>
      <Layout>
        <h2>{title}</h2>
        <div style={{ display: 'flex', font: 'bold', margin: '15px 0' }}>
          <p>{date}.</p>
          <p style={{ marginLeft: '10px' }}>{timeToRead} min read.</p>
        </div>
        <figure>
          <img src={url} />
        </figure>
        <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    </div>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
        images
      }
      timeToRead
    }
  }
`;

export default Post;
