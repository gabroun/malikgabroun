import React from 'react';
import { css } from 'react-emotion';
import { Link } from 'gatsby';

import { rhythm } from '../../utils/typography';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 650,
          padding: `0 1rem`,
          color: `red`,
        }}
      >
        {children}
      </div>
    );
  }
}

export default Layout;
