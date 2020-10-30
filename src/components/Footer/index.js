import * as S from './styles';

import React from 'react';
import Socials from '@components/Socials';

class Footer extends React.Component {
  render() {
    return (
      <S.Footer>
        <Socials />
      </S.Footer>
    );
  }
}

export default Footer;
