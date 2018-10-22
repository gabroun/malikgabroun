import React from 'react';
import { css } from 'react-emotion';
import { Link } from 'gatsby';

import { rhythm } from '../../utils/typography';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div
        className={css`
          margin: 0 auto;

          padding-top: ${rhythm(1.5)};
        `}
      >
        {children}
      </div>
    );
  }
}

export default Layout;
