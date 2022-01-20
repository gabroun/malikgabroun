import * as S from "./styles";

import Footer from "@components/Footer";
import { GlobalStyle } from "@styles";
import Header from "@components/Header";
import MobileHeader from "@components/Header/MobileHeader";
import React from "react";
import Seo from "@components/Seo";

class Layout extends React.Component {
  render() {
    const { children, title, pathSlug } = this.props;
    return (
      <React.Fragment>
        <Seo title={title} pathSlug={pathSlug} />
        <Header />
        <S.PageWrapper>
          <S.Container>{children}</S.Container>
        </S.PageWrapper>
        <Footer />
        <MobileHeader />
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default Layout;
