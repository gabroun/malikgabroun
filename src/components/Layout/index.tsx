import * as S from "./styles";

import Footer from "@components/Footer";
import { GlobalStyle } from "@styles/index";
import Header from "@components/Header";
import MobileHeader from "@components/Header/MobileHeader";
import React, { ReactNode } from "react";
import Seo from "@components/Seo";

interface LayoutProps {
  title: string;
  pathSlug: string;
  children: ReactNode;
}

const Layout = ({ children, title, pathSlug }: LayoutProps) => {
  return (
    <>
      <Seo title={title} pathSlug={pathSlug} />
      <Header />
      <S.PageWrapper>
        <S.Container>{children}</S.Container>
      </S.PageWrapper>
      <Footer />
      <MobileHeader />
      <GlobalStyle />
    </>
  );
};

export default Layout;
