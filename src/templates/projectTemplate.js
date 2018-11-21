import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/index';
import '../styles/portfolio.css';

const Project = ({ data }) => {
  const { markdownRemark } = data;
  console.log(data);
  const { title } = markdownRemark.frontmatter;
  const { html } = markdownRemark;
  return (
    <div>
      <Layout>
        {/* <h2>{title}</h2> */}
        <div
          className="project__post"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
