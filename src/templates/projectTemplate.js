import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import reactIcon from '../resources/images/icons/react.svg';
import reactRouterIcon from '../resources/images/icons/react-router.svg';
import gatsbyIcon from '../resources/images/icons/gatsby.svg';
import graphqlIcon from '../resources/images/icons/graphql.svg';
import webpackIcon from '../resources/images/icons/webpack.svg';

const ProjectPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ul {
    list-style: none;
    margin-bottom: 50px;
  }
  h2 {
    list-style: none;
    margin-bottom: 50px;
  }
  p {
    margin: 10px 0;
  }
  .react,
  .react-router,
  .webpack,
  .graphql,
  .gatsby {
    &:before {
      display: inline-block;
      content: ' ';
      height: 30px;
      width: 30px;
      margin: 8px;
      background-repeat: no-repeat;
      vertical-align: middle;
    }
  }

 .react:before {
 background-image: url('${reactIcon}');
  }
   .react-router:before {
    background-image: url('${reactRouterIcon}');
  }
  .webpack:before {
    background-image: url('${webpackIcon}');
  }
  .graphql:before {
    background-image: url('${graphqlIcon}');
  }
  .gatsby:before {
    background-image: url('${gatsbyIcon}');
  }

  .content {
    order: -1;
  }

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    .content {
      order: 1;
      margin-top: 50px;
    }
  }
`;

const Project = ({ data: { mdx: project } }) => {
  const {
    frontmatter: { title },
    body,
  } = project;

  return (
    <div>
      <Layout title={title}>
        <MDXRenderer>{body}</MDXRenderer>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`;
export default Project;
