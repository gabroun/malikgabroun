import React from 'react';

import * as S from './styles';
import Footer from '../Footer';
import Header from '../Header';
import MobileHeader from '../Header/MobileHeader';
import Seo from '../Seo';

class Layout extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <React.Fragment>
        <Seo title={title} />
        <Header />
        <S.PageWrapper>
          <S.Container> {children}</S.Container>
          <Footer />
        </S.PageWrapper>
        <MobileHeader />
      </React.Fragment>
    );
  }
}

export default Layout;
