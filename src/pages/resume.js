import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import cv1 from '../../static/cv/1.svg';
import cv2 from '../../static/cv/2.svg';
import cv from '../../static/Malik-Elgabroun_CV.pdf';

class Resume extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <Layout title="Resume - Malik Elgabroun">
          <Helmet
            meta={[
              {
                name: 'description',
                content: 'Malik Elgabroun - Resume',
              },
              {
                name: 'keywords',
                content: 'frontend, developer',
              },
            ]}
          />
          <div
            className="resume"
            style={{
              maxWidth: '909px',
              margin: '0 auto',
            }}
          >
            <a
              href={cv}
              target="blank"
              style={{
                color: '#F47C48',
                float: 'right',
              }}
            >
              see via PDF file
            </a>
            <img src={cv1} />
            <img src={cv2} />
          </div>
        </Layout>
      </div>
    );
  }
}

export default Resume;
export const query = graphql`
  query {
    file {
      name
    }
  }
`;
