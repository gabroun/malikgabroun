import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout/index';

const Post = ({ data }) => {
  const { markdownRemark } = data;
  const { title } = markdownRemark.frontmatter;
  const { html } = markdownRemark;
  return (
    <div>
      <Layout>
        <h1>Blog Post Template</h1>
        <h2>{title}</h2>
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
      }
    }
  }
`;

export default Post;
