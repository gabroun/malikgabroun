import React from 'react';
import { css } from 'react-emotion';
import Header from '../Header';
import Footer from '../Footer';
import Helmet from 'react-helmet';
import icon32 from '../../../static/icons/favicon-32x32.png';
import icon16 from '../../../static/icons/favicon-16x16.png';
class Layout extends React.Component {
  render() {
    const { children, data } = this.props;
    return (
      <div className="page-wrapper">
        <Helmet>
          <html lang="en" />
          <title>{this.props.title}</title>
          <meta
            name="google-site-verification"
            content="rdHghgE19nXaz19_OXvkv_MuEOSHl8lQPesWUmp21oU"
          />
          <meta
            name="Malik Elgabroun - Front End Developer"
            content="Personal Website - Portfolio"
          />
          <meta name="keywords" content="frontend, developer" />
          <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
        </Helmet>

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
