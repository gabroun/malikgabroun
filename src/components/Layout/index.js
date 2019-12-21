import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Seo from '../Seo';
import MobileHeader from '../Header/MobileHeader';
import * as S from './styles';

class Layout extends React.Component {
  render() {
    const { children, title } = this.props;
    const hasWindow = typeof window !== undefined;
    const width = hasWindow ? window.innerWidth : null;
    console.log(width);
    return (
      <React.Fragment>
        <Seo title={title} />
        <Header />
        <S.PageWrapper>
          <S.Container> {children}</S.Container>
          <Footer />
        </S.PageWrapper>
        <MobileHeader width={width} />
      </React.Fragment>
    );
  }
}

export default Layout;
