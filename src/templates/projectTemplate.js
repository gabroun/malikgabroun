import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/index';

const Project = ({ data }) => {
  const { markdownRemark } = data;
  console.log(data);
  const { title } = markdownRemark.frontmatter;
  const { html } = markdownRemark;
  return (
    <div>
      <Layout>
        {/* <h2>{title}</h2> */}
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
export default Project;
