import React from "react";
import Link from "next/link";
import {
  LogoContainer,
  SiteHeader,
  DesktopHeader,
  DesktopLinks,
  LinksContainer,
} from "./Header.style";
import Logo from "../Logo";
import NavigationLink from "./NavigationLink";
import Router from "../../router/router";

import { useIsMobile } from "../../hooks/useIsMobile";

const Links = () => (
  <DesktopLinks>
    <NavigationLink name={Router.home.name} url={Router.home.url} />
    <NavigationLink name={Router.about.name} url={Router.about.url} />
    <NavigationLink name={Router.blog.name} url={Router.blog.url} />
    <NavigationLink name={Router.courses.name} url={Router.courses.url} />
    <NavigationLink name={Router.bookNotes.name} url={Router.bookNotes.url} />
    <NavigationLink name={Router.uses.name} url={Router.uses.url} />
  </DesktopLinks>
);

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <SiteHeader>
      <DesktopHeader>
        <LogoContainer>
          <Link href="/" aria-label="homepage">
            {isMobile ? (
              <Logo height="69px" width="200px" viewBox="180 10 673 186" />
            ) : (
              <Logo height="109px" width="279px" viewBox="0 0 573 286" />
            )}
          </Link>
        </LogoContainer>
        {!isMobile && (
          <LinksContainer>
            <Links />
          </LinksContainer>
        )}
      </DesktopHeader>
    </SiteHeader>
  );
};

export default Header;
