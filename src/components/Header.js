import React from 'react';
import { slide as Menu } from 'react-hamburger-menu';
import Navigation from './Navigation/index';

class Header extends React.Component {
  render() {
    return (
      <div id="nav">
        <Navigation pageWrapId={'page-wrap'} outerContainerId={'nav'} />
      </div>
    );
  }
}

export default Header;
