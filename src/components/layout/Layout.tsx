import React, { ReactNode } from "react";
import { Container, MainWrapper } from "./Layout.style";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MobileHeader from "../header/MobileHeader";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
      <MobileHeader />
    </Container>
  );
};

export default Layout;
