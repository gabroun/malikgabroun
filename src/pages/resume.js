import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout/index';
import { graphql } from 'gatsby';

class Resume extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <Layout>
          <h1>resume component</h1>
          <h1>About {data.site.siteMetadata.title}</h1>
          <p>
            We're the only site running on your computer dedicated to showing
            the best photos and videos of pandas eating lots of food.
          </p>
        </Layout>
      </div>
    );
  }
}

export default Resume;
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
