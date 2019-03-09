import React from 'react';
import { Link } from 'gatsby';
import Media from 'react-media';
import styled from 'styled-components';

import Links from './Navigation/Links';
import Navigation from './Navigation/index';
import logo from '../resources/images/logo.png';
import logoIcon from '../resources/images/logo-icon.png';
import Logo from './Logo';

const NavBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 25px;
  max-width: 1280px;
  .nav-menu {
    justify-self: end;
  }
  @media (max-width: 1023px) {
    .menu-icon {
      justify-self: end;
      align-self: center;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1023px) {
    width: 100%;
    flex-basis: 80%;
  }
`;

const MobileMenu = styled.div`
  @media (max-width: 1023px) {
    &.active {
      .nav-menu {
        transform: translateX(14rem);
        z-index: 1;
      }
      &:after {
        position: fixed;
        width: calc(100% - 14rem);
        height: 100%;
        color: #fff;
        content: '';
        background: rgba(0, 0, 0, 0.45);
        right: 0;
        top: 0;
        transition: transform 0.3s ease-out;
        z-index: 1;
      }
    }
    .nav-menu {
      position: fixed;
      top: 0;
      bottom: 0;
      left: -14rem;
      width: 14rem;
      background-color: white;
      transition: transform 0.3s ease-out;
      border: solid 1px;
    }
  }
`;

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
      <NavBar>
        <Media
          query="(min-width: 1024px)"
          defaultMatches={this.state.device === 'desktop'}
          render={() => {
            return (
              <React.Fragment>
                <LogoContainer>
                  <Link to={'/'}>
                    <Logo height="109px" width="279px" viewBox="0 0 573 286" />
                  </Link>
                </LogoContainer>
                <Links />
              </React.Fragment>
            );
          }}
        />
        <Media
          query="(max-width: 1023px)"
          defaultMatches={this.state.device === 'mobile'}
          render={() => {
            return (
              <React.Fragment>
                <LogoContainer>
                  <Link to={'/'}>
                    <Logo
                      device="mobile"
                      height="69px"
                      width="200px"
                      viewBox="180 10 673 186"
                    />
                  </Link>
                </LogoContainer>
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

                <MobileMenu
                  className={
                    this.state.active ? 'burger-menu active' : 'burger-menu'
                  }
                  onClick={this.handleClick.bind(this)}
                  onKeyDown={this.handleClick.bind(this)}
                  role="button"
                  tabIndex={0}
                >
                  <Links />
                </MobileMenu>
              </React.Fragment>
            );
          }}
        />
      </NavBar>
    );
  }
}

export default Header;
