import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Helmet from 'react-helmet';
import icon32 from '../../static/icons/favicon-32x32.png';
import icon16 from '../../static/icons/favicon-16x16.png';
import styled from 'styled-components';
import Seo from './Seo';
const PageWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 25px;
`;

const MainColumn = styled.div`
  min-height: 100%;
`;

class Layout extends React.Component {
  render() {
    const { children, data, title } = this.props;
    return (
      <div>
        <Seo title={title} />
        <Header />
        <PageWrapper>
          <MainColumn className="main-column"> {children}</MainColumn>
        </PageWrapper>
        <Footer />
      </div>
    );
  }
}

export default Layout;
