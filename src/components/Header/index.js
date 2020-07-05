import React from 'react';
import { Link } from 'gatsby';

import Links from '../Navigation/Links';
import Logo from '../Logo';

import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <div className="desktop-header">
        <S.LogoContainer>
          <Link to={'/'} aria-label="homepage">
            <Logo height="109px" width="279px" viewBox="0 0 573 286" />
          </Link>
        </S.LogoContainer>
        <Links />
      </div>
      <div className="mobile-header">
        <S.LogoContainer>
          <Link to={'/'} aria-label="homepage">
            <Logo
              device="mobile"
              height="69px"
              width="200px"
              viewBox="180 10 673 186"
            />
          </Link>
        </S.LogoContainer>
      </div>
    </S.Header>
  );
};

export default Header;
