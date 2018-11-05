import React from 'react';
import Links from './Navigation/Links';
import Navigation from './Navigation/index';
import { css } from 'react-emotion';
import logo from '../resources/images/logo.png';
import logoIcon from '../resources/images/logo-icon.png';

import Media from 'react-media';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      active: false,
      width: '',
      device: '',
    };

    this.handleResize = this.handleResize.bind(this);
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

  componentDidMount() {
    //subscription to browser width
    //listen to changes
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    //to unsubscribe from the event and avoid memory leak
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize() {
    if (window.innerWidth >= 1024) {
      this.setState(() => {
        return {
          width: window.innerWidth,
          device: 'desktop',
        };
      });
    } else {
      this.setState(() => {
        return {
          width: window.innerWidth,
          device: 'mobile',
        };
      });
    }
  }

  render() {
    return (
      <div className="menu-row">
        <Media
          query="(min-width: 1024px)"
          defaultMatches={this.state.device === 'desktop'}
          render={() => {
            return (
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
            );
          }}
        />
        <Media
          query="(max-width: 1023px)"
          defaultMatches={this.state.device === 'mobile'}
          render={() => {
            return (
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
            );
          }}
        />
      </div>
    );
  }
}

export default Header;
