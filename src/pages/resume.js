import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout/index';
import { graphql } from 'gatsby';
import cv1 from '../../static/cv/1.svg';
import cv2 from '../../static/cv/2.svg';
import cv from '../../static/Malik-Elgabroun_CV.pdf';
import Helmet from 'react-helmet';

class Resume extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <Layout data={data}>
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
          {/* <h1>About {data.site.siteMetadata.title}</h1> */}
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
