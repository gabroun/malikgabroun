import React from 'react';
import { css } from 'react-emotion';
import { Link, graphql } from 'gatsby';
import Header from '../Header';
import Footer from '../Footer';
import { rhythm } from '../../utils/typography';
import Helmet from 'react-helmet';
import icon32 from '../../../static/icons/favicon-32x32.png';
import icon16 from '../../../static/icons/favicon-16x16.png';
// import 'prismjs/themes/prism-okaidia.css';
class Layout extends React.Component {
  render() {
    const { children, data } = this.props;
    return (
      <div className="page-wrapper">
        <Helmet
          meta={[
            {
              name: 'description',
              content: 'Malik Elgabroun - Front-End Developer',
            },
            {
              name: 'keywords',
              content: 'frontend, developer',
            },
          ]}
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: `${icon16}`,
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: `${icon32}`,
            },
          ]}
        />
        <Header />
        <div
          className={css`
            max-width: 1280px;
            margin: 0 auto;
            padding: 25px;
          `}
        >
          <div className="main-column"> {children}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
