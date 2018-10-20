import React from 'react';
import Links from './Navigation/Links';
import Navigation from './Navigation/index';
import MediaQuery from 'react-responsive';

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
        <div className="menu">
          <MediaQuery minDeviceWidth={1025}>
            <div className="logo">Malik Elgabroun</div>
            <Links />
          </MediaQuery>
          <MediaQuery maxWidth={1024}>
            <div className="logo">Malik Elgabroun</div>
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
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default Header;
