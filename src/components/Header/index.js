import React from 'react';
import { Link } from 'gatsby';
import Media from 'react-media';

import Links from '../Navigation/Links';
import Navigation from '../Navigation/index';
import Logo from '../Logo';
import Footer from '../Footer';

import * as S from './styles';

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
      <S.Header>
        <Media
          query="(min-width: 1024px)"
          defaultMatches={this.state.device === 'desktop'}
          render={() => {
            return (
              <React.Fragment>
                <S.LogoContainer>
                  <Link to={'/'} aria-label="homepage">
                    <Logo height="109px" width="279px" viewBox="0 0 573 286" />
                  </Link>
                </S.LogoContainer>
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

                <S.MobileMenu
                  className={
                    this.state.active ? 'burger-menu active' : 'burger-menu'
                  }
                  onClick={this.handleClick.bind(this)}
                  onKeyDown={this.handleClick.bind(this)}
                  role="button"
                  tabIndex={0}
                >
                  <Links />
                  {/* <Footer /> */}
                </S.MobileMenu>
              </React.Fragment>
            );
          }}
        />
      </S.Header>
    );
  }
}

export default Header;
