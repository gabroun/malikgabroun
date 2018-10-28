import React from 'react';
import Links from './Navigation/Links';
import Navigation from './Navigation/index';
import { css } from 'react-emotion';
import MediaQuery from 'react-responsive';
import logo from '../resources/images/logo.png';
import logoIcon from '../resources/images/logo-icon.png';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      active: false,
    };
  }
  handleClick(id) {
    let { open, active } = this.state;
    this.setState(() => {
      return {
        open: !open,
        active: !active,
      };
    });
  }
  render() {
    return (
      <div className="menu-row">
        <MediaQuery minDeviceWidth={1024}>
          <div
            className={css`
              display: flex;
              padding: 25px;
              max-width: 1280px;
              margin: 0 auto;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <div className="logo">
              <img src={logo} />
            </div>
            <Links />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          <div className="menu">
            <div className="logo">
              <img src={logoIcon} />
            </div>
            <Navigation
              isOpen={this.state.open}
              menuClicked={() => this.handleClick(0)}
              width={36}
              height={30}
              strokeWidth={2}
              rotate={0}
              color="black"
              borderRadius={5}
              animationDuration={0.3}
            />

            <div
              className={
                this.state.active ? 'burger-menu active' : 'burger-menu'
              }
              onClick={this.handleClick.bind(this)}
            >
              <Links />
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Header;
