import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
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
      <React.Fragment>
        <Seo title={title} />
        <Header />
        <PageWrapper>
          <MainColumn> {children}</MainColumn>
        </PageWrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
