import React, { ReactNode } from "react";

import { useRouter } from "next/router";
import { useIsMobile } from "../../hooks/useIsMobile";
import Link from "next/link";
import { StyledLink } from "./Header.style";

type props = {
  url: string;
  name: string;
  children?: ReactNode;
};

const NavigationLink = ({ url, name, children }: props) => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { pathname } = router;

  return (
    <StyledLink active={pathname === url}>
      <Link href={url}>
        {isMobile && children}
        <div>{name}</div>
      </Link>
    </StyledLink>
  );
};

export default NavigationLink;
