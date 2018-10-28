import React from 'react';
import { css } from 'react-emotion';
import { Link } from 'gatsby';
import Header from '../Header';
import Footer from '../Footer';
import { rhythm } from '../../utils/typography';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
