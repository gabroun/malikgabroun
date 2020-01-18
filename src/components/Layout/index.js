import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Seo from '../Seo';
import MobileHeader from '../Header/MobileHeader';
import * as S from './styles';
import { GlobalStyle } from '../styles';

class Layout extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <React.Fragment>
        <Seo title={title} />
        <Header />
        <S.PageWrapper>
          <S.Container>{children}</S.Container>
          <Footer />
        </S.PageWrapper>
        <MobileHeader />
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default Layout;
