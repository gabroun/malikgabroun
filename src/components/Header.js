import React from 'react';
import Links from './Navigation/Links';
import Navigation from './Navigation/index';
import { css } from 'react-emotion';
import logo from '../resources/images/logo.png';
import logoIcon from '../resources/images/logo-icon.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      active: false,
      width: window.innerWidth,
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

  //subscription to browser width
  componentDidMount() {
    //listen to changes
    window.addEventListener('resize', this.handleResize);
  }

  //to unsubscribe from the event and avoid memory leak
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize() {
    this.setState(() => {
      return {
        width: window.innerWidth,
      };
    });
  }

  render() {
    return (
      <div className="menu-row">
        {this.state.width >= 1024 ? (
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
        ) : (
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
        )}
      </div>
    );
  }
}

export default Header;
